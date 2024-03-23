import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import MinecraftForgeForm from "@/components/Forms/MinecraftForge";
import { MinecraftVanillaForm } from "@/components/Forms/MinecraftVanilla";
import BackToDashboard from "@/components/BackToDashboard/BackToDashboard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { SatisfactoryForm } from "@/components/Forms/Satisfactory";

export default function Create() {
  const router = useRouter();

  const [serverToCreate, setServerToCreate] = useState(null);
  const allowedContainers = [
    "Minecraft Vanilla",
    "Minecraft Forge",
    "Satisfactory",
  ];

  useEffect(() => {
    if (router.query.container) {
      setServerToCreate(router.query.container);
    }
  }, [router.query.container]);

  return (
    <div className="flex flex-col gap-4">
      <BackToDashboard />
      {serverToCreate === "Minecraft Vanilla" && <MinecraftVanillaForm />}
      {serverToCreate === "Minecraft Forge" && <MinecraftForgeForm />}
      {serverToCreate === "Satisfactory" && <SatisfactoryForm />}
      {!allowedContainers.includes(serverToCreate) && (
        <div className="flex flex-col gap-4">
          <p className="bg-red-100 p-4 border-solid border-2 border-red-200 flex items-center gap-4">
            <FontAwesomeIcon icon={faExclamationTriangle} /> Ein Container
            dieser Art kann nicht erstellt werden.
          </p>
          <p>Folgende Container können erstellt werden:</p>
          <ul className="list-disc ms-4">
            {allowedContainers.map((container) => (
              <li>{container}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
