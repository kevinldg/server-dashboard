import axios from "axios";

export default async function Handler(req, res) {
  const { container } = req.query;

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const response = await axios.post(
      `${process.env.API_URL}/containers/${container}/start`
    );

    if (response.status === 204) {
      res.status(200).json(response.data);
    } else {
      res
        .status(response.status)
        .json({ error: `Failed to start container ${container}` });
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
}
