import Serverstatus from "@/utils/Serverstatus/Serverstatus";

export default function Header() {
  return (
    <header className="bg-neutral-800 flex justify-between items-center p-4 shadow">
      <h1 className="text-xl font-bold">Server Dashboard</h1>
      <Serverstatus />
    </header>
  );
}
