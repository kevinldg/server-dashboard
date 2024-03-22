import { useEffect, useState } from "react";
import axios from "axios";

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
  const serverAvailable = data && data.length > 0 ? true : false;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/api/containers");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <p className="text-2xl font-bold">Hallo, {username}!</p>
        <ServerStatus />
      </div>
      {serverAvailable && (
        <div className="flex flex-col gap-4">
          <p className="font-bold">Folgende Container sind verfügbar:</p>
          <div className="flex flex-col gap-2">
            {serverAvailable &&
              data.map(({ Id, Names, State }) => (
                <ContainerAvailable
                  key={Id}
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
