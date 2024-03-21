import ContainerAvailable from "@/components/ContainerAvailable/ContainerAvailable";
import ContainerCreate from "@/components/ContainerCreate/ContainerCreate";
import ServerStatus from "@/components/ServerStatus/ServerStatus";

const username = "GuNShOtzZ";

const availableContainers = [
  {
    name: "minecraft-server-01",
    isOnline: true,
  },
  {
    name: "garrysmod-server-01",
    isOnline: false,
  },
  {
    name: "counterstrike-server-01",
    isOnline: true,
  },
];

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
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <p className="text-2xl font-bold">Hallo, {username}!</p>
        <ServerStatus />
      </div>
      <div className="flex flex-col gap-4">
        <p className="font-bold">Folgende Container sind verfügbar:</p>
        <div className="flex flex-col gap-2">
          {availableContainers.map(({ name, isOnline }) => (
            <ContainerAvailable name={name} isOnline={isOnline} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="font-bold">Container erstellen</p>
        <div className="flex flex-col gap-2">
          {containersToCreate.map(({ name }) => (
            <ContainerCreate name={name} />
          ))}
        </div>
      </div>
    </div>
  );
}
