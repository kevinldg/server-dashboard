import axios from "axios";

export default async function Handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const response = await axios.get(
      `${process.env.API_URL}/containers/json?all=true`
    );

    if (response.status === 200) {
      res.status(200).json(response.data);
    } else {
      res
        .status(response.status)
        .json({ error: "Failed to fetch data from all container" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
