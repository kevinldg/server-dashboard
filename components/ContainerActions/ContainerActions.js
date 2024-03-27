import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

import {
  faPowerOff,
  faRotate,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

import CurrentAction from "./CurrentAction";

export default function ContainerActions({ id, name }) {
  const router = useRouter();

  const [currentAction, setCurrentAction] = useState(null);

  const handleStartContainer = async () => {
    try {
      setCurrentAction(["start", faPowerOff]);

      const response = await axios.get(
        "/api/containers/" + (id && id) + "/start"
      );
      console.log("Starten des Containers:", response.data);

      setTimeout(() => {
        router.push({
          pathname: "/dashboard",
          query: {
            notification: "Der Container " + name + " wurde gestartet.",
          },
        });
      }, 2000);
    } catch (error) {
      console.error("Fehler beim Starten des Containers:", error);
    }
  };

  const handleStopContainer = async () => {
    try {
      setCurrentAction(["stop", faPowerOff]);

      const response = await axios.get(
        "/api/containers/" + (id && id) + "/stop"
      );
      console.log("Stoppen des Containers:", response.data);

      setTimeout(() => {
        router.push({
          pathname: "/dashboard",
          query: { notification: "Der Container " + name + " wurde gestoppt." },
        });
      }, 2000);
    } catch (error) {
      console.error("Fehler beim Stoppen des Containers:", error);
    }
  };

  const handleRestartContainer = async () => {
    try {
      setCurrentAction(["restart", faRotate]);

      const response = await axios.get(
        "/api/containers/" + (id && id) + "/restart"
      );
      console.log("Neustarten des Containers:", response.data);

      setTimeout(() => {
        router.push({
          pathname: "/dashboard",
          query: {
            notification: "Der Container " + name + " wurde neu gestartet.",
          },
        });
      }, 2000);
    } catch (error) {
      console.error("Fehler beim Neustarten des Containers:", error);
    }
  };

  const handleDeleteContainer = async () => {
    try {
      setCurrentAction(["delete", faTrashCan]);

      const response = await axios.get(
        "/api/containers/" + (id && id) + "/delete",
        {
          params: {
            name: name,
          },
        }
      );
      console.log("Löschen des Containers:", response.data);

      setTimeout(() => {
        router.push({
          pathname: "/dashboard",
          query: { notification: "Der Container " + name + " wurde gelöscht." },
        });
      }, 2000);
    } catch (error) {
      console.error("Fehler beim Löschen des Containers:", error);
    }
  };

  const handleEditServerProperties = async () => {
    try {
      setTimeout(() => {
        router.push({
          pathname: "/containers/" + id + "/serverProperties",
          query: {
            containerName: name,
          },
        });
      }, 1000);
    } catch (error) {
      console.error("Fehler beim Editieren der Server Properties:", error);
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
        {name && name.includes("minecraft") && (
          <li className="shadow hover:scale-[1.025] transition-transform">
            <button
              onClick={handleEditServerProperties}
              className=" bg-blue-500 text-white px-2 py-1"
            >
              server.properties bearbeiten
            </button>
          </li>
        )}
      </ul>
      <CurrentAction currentAction={currentAction} />
    </>
  );
}
