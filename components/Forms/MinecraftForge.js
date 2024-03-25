import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function MinecraftForgeForm() {
  const router = useRouter();
  const availableMinecraftVersions = ["1.12.2"];
  const availableForgeVersions = ["14.23.5.2860"];

  const [containerConfig, setContainerConfig] = useState({
    Name: "",
    Image: "itzg/minecraft-server:java8",
    Binds: ["/home/" + "minecraft-server" + ":/data"],
    HostConfig: {
      PortBindings: {
        "25565/tcp": [
          {
            HostPort: "25565",
          },
        ],
      },
      PublishAllPorts: "false",
      Binds: [`/home/minecraft-server:/data`],
    },
    Env: {
      EULA: "TRUE",
      JAVA_VERSION: "8u212",
      TYPE: "FORGE",
      VERSION:
        availableMinecraftVersions[availableMinecraftVersions.length - 1],
      FORGE_VERSION: availableForgeVersions[availableForgeVersions.length - 1],
      MEMORY: "8G",
      RCON_PASSWORD: "Start-01",
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
      console.error("Fehler beim Erstellen des Minecraft Containers.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "VERSION" || name === "MEMORY") {
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
      <h2 className="font-bold text-2xl">Minecraft Forge</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80">
        <div className="flex flex-col">
          <label>Name des Containers</label>
          <input
            onChange={handleChange}
            type="text"
            name="Name"
            value={containerConfig.Name}
            className=" bg-neutral-200 p-1"
            placeholder="z.B. minecraft-server01"
          />
        </div>
        <div className="flex flex-col">
          <label>Arbeitsspeicher in GB (Format: 8G)</label>
          <input
            onChange={handleChange}
            type="text"
            name="MEMORY"
            value={containerConfig.Env.MEMORY}
            className=" bg-neutral-200 p-1"
          />
        </div>
        <div className="flex flex-col">
          <label>Minecraft Version</label>
          <select
            onChange={handleChange}
            name="VERSION"
            value={containerConfig.Env.VERSION}
            className=" bg-neutral-200 p-1"
          >
            {availableMinecraftVersions.map((version) => (
              <option value={version}>{version}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label>Forge Version</label>
          <select
            onChange={handleChange}
            name="FORGE_VERSION"
            value={containerConfig.Env.FORGE_VERSION}
            className=" bg-neutral-200 p-1"
          >
            {availableForgeVersions.map((version) => (
              <option value={version}>{version}</option>
            ))}
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
