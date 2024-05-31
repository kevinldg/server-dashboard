import axios from "axios";
import { useRouter } from "next/router";

export default function ContainerActions({ id, name }) {
  const router = useRouter();

  const handleStartContainer = async () => {
    try {
      console.log(`Starting container ${name} with the ID ${id}`);
      const response = await axios.get(`/api/containers/${id}/start`);

      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      console.error(
        `Error while starting container ${name} with the ID ${id}: ${error}`
      );
    }
  };

  const handleStopContainer = async () => {
    try {
      console.log(`Stopping container ${name} with the ID ${id}`);
      const response = await axios.get(`/api/containers/${id}/stop`);

      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      console.error(
        `Error while stopping container ${name} with the ID ${id}: ${error}`
      );
    }
  };

  const handleRestartContainer = async () => {
    try {
      console.log(`Restarting container ${name} with the ID ${id}`);
      const response = await axios.get(`/api/containers/${id}/restart`);

      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      console.error(
        `Error while restarting container ${name} with the ID ${id}: ${error}`
      );
    }
  };

  const handleDeleteContainer = async () => {
    try {
      console.log(`Deleting container ${name} with the ID ${id}`);
      const response = await axios.get(`/api/containers/${id}/delete`);

      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      console.error(
        `Error while deleting container ${name} with the ID ${id}: ${error}`
      );
    }
  };

  return (
    <div className="flex gap-4">
      <button
        onClick={handleStartContainer}
        className="bg-blue-700 px-2 py-1 rounded transition-transform hover:scale-[0.975]"
      >
        Start
      </button>
      <button
        onClick={handleStopContainer}
        className="bg-blue-700 px-2 py-1 rounded transition-transform hover:scale-[0.975]"
      >
        Stop
      </button>
      <button
        onClick={handleRestartContainer}
        className="bg-neutral-600 px-2 py-1 rounded transition-transform hover:scale-[0.975]"
      >
        Restart
      </button>
      <button
        onClick={handleDeleteContainer}
        className="bg-red-700 px-2 py-1 rounded transition-transform hover:scale-[0.975]"
      >
        Delete
      </button>
    </div>
  );
}
