import axios from "axios";

export default async function Handler(req, res) {
  const { container } = req.query;

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const response = await axios.delete(
      process.env.API_URL + "/containers/" + container
    );

    if (response.status === 200) {
      res.status(200).json(response.data);
    } else {
      res.status(response.status).json({ error: "Failed to delete container" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
