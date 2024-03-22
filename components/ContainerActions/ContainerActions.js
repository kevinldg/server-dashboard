import axios from "axios";
import { useRouter } from "next/router";

export default function ContainerActions({ id }) {
  const router = useRouter();

  const handleStartContainer = async () => {
    try {
      const response = await axios.get(
        "/api/containers/" + (id && id) + "/start"
      );
      console.log("Starten des Containers:", response.data);
    } catch (error) {
      console.error("Fehler beim Starten des Containers:", error);
    }
  };

  const handleStopContainer = async () => {
    try {
      const response = await axios.get(
        "/api/containers/" + (id && id) + "/stop"
      );
      console.log("Stoppen des Containers:", response.data);
    } catch (error) {
      console.error("Fehler beim Stoppen des Containers:", error);
    }
  };

  const handleRestartContainer = async () => {
    try {
      const response = await axios.get(
        "/api/containers/" + (id && id) + "/restart"
      );
      console.log("Neustarten des Containers:", response.data);
    } catch (error) {
      console.error("Fehler beim Neustarten des Containers:", error);
    }
  };

  const handleDeleteContainer = async () => {
    try {
      const response = await axios.get(
        "/api/containers/" + (id && id) + "/delete"
      );
      console.log("Löschen des Containers:", response.data);
      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
    } catch (error) {
      console.error("Fehler beim Löschen des Containers:", error);
    }
  };

  return (
    <>
      <ul className="flex items-center gap-2">
        <li className="shadow hover:scale-[1.025] transition-transform">
          <button
            onClick={handleStartContainer}
            className=" bg-neutral-300 text-white px-2 py-1"
          >
            Start
          </button>
        </li>
        <li className="shadow hover:scale-[1.025] transition-transform">
          <button
            onClick={handleStopContainer}
            className=" bg-neutral-300 text-white px-2 py-1"
          >
            Stopp
          </button>
        </li>
        <li className="shadow hover:scale-[1.025] transition-transform">
          <button
            onClick={handleRestartContainer}
            className=" bg-neutral-300 text-white px-2 py-1"
          >
            Neustart
          </button>
        </li>
        <li className="shadow hover:scale-[1.025] transition-transform">
          <button
            onClick={handleDeleteContainer}
            className=" bg-red-500 text-white px-2 py-1"
          >
            Löschen
          </button>
        </li>
      </ul>
    </>
  );
}
