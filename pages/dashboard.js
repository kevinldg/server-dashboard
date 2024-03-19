import DockerContainer from "@/components/DockerContainer/DockerContainer";
import ServerStatus from "@/components/ServerStatus/ServerStatus";

export default function Dashboard() {
  const username = "GuNShOtzZ";

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <p className="text-2xl font-bold">Hello, {username}!</p>
        <ServerStatus />
      </div>
      <div className="flex flex-col gap-4">
        <p className="font-bold">Folgende Container sind verfügbar:</p>
        <div className="flex flex-col gap-2">
          <DockerContainer name="Minecraft Vanilla" isOnline />
          <DockerContainer name="Garry's Mod" isOnline />
          <DockerContainer name="Counter Strike 2 Server" isOnline />
        </div>
      </div>
    </div>
  );
}
