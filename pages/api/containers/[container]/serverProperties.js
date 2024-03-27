import axios from "axios";
import { Client } from "ssh2";

export default function Handler(req, res) {
  if (req.method !== "GET" && req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const sshConfig = {
    host: process.env.SSH_HOST,
    port: process.env.SSH_PORT,
    username: process.env.SSH_USER,
    password: process.env.SSH_PASSWORD,
  };

  if (req.method === "GET") {
    const containerName = req.query.containerName;

    try {
      const connection = new Client();
      connection
        .on("ready", () => {
          connection.exec(
            "cat /home/" + containerName + "/server.properties",
            (error, stream) => {
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
            }
          );
        })
        .connect(sshConfig);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  if (req.method === "POST") {
    const body = req.body;

    try {
      const connection = new Client();
      connection
        .on("ready", () => {
          connection.exec(
            "echo '" +
              (body && body.content) +
              "' > /home/" +
              (body && body.containerName) +
              "/server.properties",
            (error, stream) => {
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
            }
          );
        })
        .connect(sshConfig);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
