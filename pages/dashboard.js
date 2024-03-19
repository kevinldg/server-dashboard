import DockerContainer from "@/components/DockerContainer/DockerContainer";

export default function Dashboard() {
  const username = "GuNShOtzZ";
  const serverStatus = false;

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <p className="text-2xl font-bold">Hello, {username}!</p>
        <p>
          Der Server ist aktuell{" "}
          {serverStatus ? (
            <span className="font-bold text-green-500">online</span>
          ) : (
            <span className="font-bold text-red-500">offline</span>
          )}
        </p>
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
