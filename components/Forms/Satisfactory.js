import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function SatisfactoryForm() {
  const router = useRouter();

  const [containerConfig, setContainerConfig] = useState({
    Name: "",
    Image: "wolveix/satisfactory-server",
    RestartPolicy: {
      Name: "unless-stopped",
    },
    HostConfig: {
      MemoryReservation: 12884901888,
      Memory: 17179869184,
      PortBindings: {
        "7777/udp": [
          {
            HostPort: "7777",
          },
        ],
        "15000/udp": [
          {
            HostPort: "15000",
          },
        ],
        "15777/udp": [
          {
            HostPort: "15777",
          },
        ],
      },
      PublishAllPorts: false,
      Binds: [`/home/satisfactory-server:/data`],
    },
    Env: {
      MAXPLAYERS: "4",
      STEAMBETA: "false",
      AUTOSAVEONDISCONNECT: "true",
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const envConfig = Object.entries(containerConfig.Env).map(
        ([key, value]) => `${key}=${value}`
      );

      const requestBody = {
        Image: containerConfig.Image,
        Env: envConfig,
        Name: containerConfig.Name,
        HostConfig: {
          Binds: containerConfig.HostConfig.Binds,
        },
      };

      const response = await axios.post("/api/containers/create", requestBody);
      console.log(response.data);

      setTimeout(() => {
        router.push({
          pathname: "/dashboard",
          query: {
            notification:
              "Der Container " + containerConfig.Name + " wurde erstellt.",
          },
        });
      }, 2000);
    } catch (error) {
      console.error("Fehler beim Erstellen des Satisfactory Containers.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "MAXPLAYERS" || name === "STEAMBETA") {
      setContainerConfig((prevConfig) => ({
        ...prevConfig,
        Env: {
          ...prevConfig.Env,
          [name]: value,
        },
      }));
    } else {
      setContainerConfig((prevConfig) => ({
        ...prevConfig,
        [name]: value,
        HostConfig: {
          ...prevConfig.HostConfig,
          Binds:
            name === "Name"
              ? [`/home/${value}:/data`]
              : [...prevConfig.HostConfig.Binds, `/home/${value}:/data`],
        },
      }));
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-2xl">Satisfactory</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80">
        <div className="flex flex-col">
          <label>Name des Containers</label>
          <input
            onChange={handleChange}
            type="text"
            name="Name"
            value={containerConfig.Name}
            className=" bg-neutral-200 p-1"
            placeholder="z.B. satisfactory-server01"
          />
        </div>
        <div className="flex flex-col">
          <label>Maximale Anzahl an Spieler</label>
          <input
            onChange={handleChange}
            type="number"
            min="1"
            max="8"
            name="MAXPLAYERS"
            value={containerConfig.Env.MAXPLAYERS}
            className=" bg-neutral-200 p-1"
          />
        </div>
        <div className="flex flex-col">
          <label>Beta</label>
          <select
            onChange={handleChange}
            name="STEAMBETA"
            value={containerConfig.Env.STEAMBETA}
            className=" bg-neutral-200 p-1"
          >
            <option value="false">Nein</option>
            <option value="true">Ja</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-fit bg-blue-500 text-white px-2 py-1 shadow hover:scale-[1.025] transition-transform"
        >
          Erstellen
        </button>
      </form>
    </div>
  );
}
