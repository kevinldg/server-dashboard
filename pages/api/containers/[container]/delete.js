import axios from "axios";
import { Client } from "ssh2";

export default async function Handler(req, res) {
  const { container } = req.query;
  const { name } = req.query;

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const sshConfig = {
      host: process.env.SSH_HOST,
      port: process.env.SSH_PORT,
      username: process.env.SSH_USER,
      password: process.env.SSH_PASSWORD,
    };

    const connection = new Client();

    const response = await axios.delete(
      process.env.API_URL + "/containers/" + container
    );

    if (response.status === 200) {
      connection
        .on("ready", () => {
          connection.exec(`rm -r /home${name}`, (error, stream) => {
            if (error) {
              console.error("Error:", error);
              return res.status(500).json({ error: "Internal Server Error" });
            }

            let STDOUT = "";
            let STDERR = "";

            stream
              .on("close", (code, signal) => {
                connection.end();
                res.status(200).json({ stdout: STDOUT, stderr: STDERR });
              })
              .on("data", (data) => {
                console.log("STDOUT:", data.toString());
                STDOUT += data.toString();
              })
              .stderr.on("data", (data) => {
                console.log("STDERR:", data.toString());
                STDERR += data.toString();
              });
          });
        })
        .connect(sshConfig);

      res.status(200).json(response.data);
    } else {
      res.status(response.status).json({ error: "Failed to delete container" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
