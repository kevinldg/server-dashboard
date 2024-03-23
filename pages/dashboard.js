import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

import ContainerAvailable from "@/components/ContainerAvailable/ContainerAvailable";
import ContainerCreate from "@/components/ContainerCreate/ContainerCreate";
import ServerStatus from "@/components/ServerStatus/ServerStatus";

const username = "GuNShOtzZ";

const containersToCreate = [
  {
    name: "Minecraft Vanilla",
  },
  {
    name: "Minecraft Forge",
  },
  {
    name: "Teamspeak 3",
  },
  {
    name: "Counter Strike 2",
  },
];

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [notification, setNotification] = useState(null);
  const serverAvailable = data?.length > 0 ? true : false;

  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/api/containers");
        setData(response.data);

        if (router.query.notification) {
          const notification = router.query.notification;
          setNotification(notification);

          setTimeout(() => {
            router.replace({
              pathname: router.pathname,
              query: {},
            });
          }, 5000);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [router.query.notification]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <p className="text-2xl font-bold">Hallo, {username}!</p>
        <ServerStatus />
      </div>
      {notification?.length > 0 && (
        <p className="bg-blue-100 border-solid border-2 border-blue-200 p-4 w-fit">
          <FontAwesomeIcon icon={faInfoCircle} className="me-4" />
          {notification}
        </p>
      )}
      {serverAvailable && (
        <div className="flex flex-col gap-4">
          <p className="font-bold">Folgende Container sind verfügbar:</p>
          <div className="flex flex-col gap-2">
            {data.map(({ Id, Names, State }) => (
              <ContainerAvailable
                key={Id}
                id={Id}
                name={Names[0].slice(1)}
                state={State}
              />
            ))}
          </div>
        </div>
      )}
      {serverAvailable && (
        <div className="flex flex-col gap-4">
          <p className="font-bold">Container erstellen</p>
          <div className="flex flex-col gap-2">
            {containersToCreate.map(({ name }) => (
              <ContainerCreate name={name} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
