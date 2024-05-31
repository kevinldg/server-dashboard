import axios from "axios";
import { useEffect, useState } from "react";

export default function Serverstatus() {
  const [isServerOnline, setIsServerOnline] = useState(false);

  useEffect(() => {
    async function fetchServerStatus() {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/containers"
        );

        if (response.status === 200) {
          setIsServerOnline(true);
        }
      } catch (error) {
        console.error("Error fetching server status:", error);
      }
    }

    fetchServerStatus();
  }, []);

  return (
    <span
      className={`px-2 py-1 rounded ${
        isServerOnline ? "bg-green-600" : "bg-red-600"
      }`}
    >
      <p className="font-bold">{isServerOnline ? "online" : "offline"}</p>
    </span>
  );
}
