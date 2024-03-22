import { useEffect, useState } from "react";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";

export default function ServerStatus() {
  const [serverStatus, setServerStatus] = useState(null);

  useEffect(() => {
    async function fetchServerStatus() {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/containers"
        );

        if (response.status === 200) {
          setServerStatus(true);
        } else {
          setServerStatus(false);
        }
      } catch (error) {
        console.error("Error fetching server state:", error);
        setServerStatus(false);
      }
    }

    fetchServerStatus();
  }, []);

  return (
    <p>
      Der Server ist aktuell{" "}
      {serverStatus === null ? (
        <FontAwesomeIcon icon={faQuestion} className="ms-2" />
      ) : serverStatus ? (
        <span className="font-bold text-green-500">online</span>
      ) : (
        <span className="font-bold text-red-500">offline</span>
      )}
    </p>
  );
}
