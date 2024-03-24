import axios from "axios";

export default async function Handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const containerConfig = req.body;

    const response = await axios.post(
      process.env.API_URL +
        "/containers/create" +
        "?name=" +
        containerConfig.Name,
      containerConfig
    );

    const containerId = response.data.Id;

    await axios.post(
      process.env.API_URL + "/containers/" + containerId + "/start"
    );

    res
      .status(200)
      .json({ message: "Der Container wurde erstellt und gestartet!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
}
