import MinecraftForgeForm from "@/components/Forms/MinecraftForge";
import { MinecraftVanillaForm } from "@/components/Forms/MinecraftVanilla";
import BackToDashboard from "@/components/BackToDashboard/BackToDashboard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

export default function Create() {
  const serverToCreate = "Minecraft Forge";

  const allowedContainers = ["Minecraft Vanilla", "Minecraft Forge"];

  return (
    <div className="flex flex-col gap-4">
      <BackToDashboard />
      {serverToCreate === "Minecraft Vanilla" && <MinecraftVanillaForm />}
      {serverToCreate === "Minecraft Forge" && <MinecraftForgeForm />}
      {!allowedContainers.includes(serverToCreate) && (
        <div className="flex flex-col gap-4">
          <p className="bg-red-100 p-4 border-solid border-2 border-red-200 flex items-center gap-4">
            <FontAwesomeIcon icon={faExclamationTriangle} /> Ein Container
            dieser Art kann nicht erstellt werden.
          </p>
          <p>Folgende Container können erstellt werden:</p>
          <ul className="list-disc ms-4">
            <li>Minecraft Vanilla</li>
            <li>Minecraft Forge</li>
          </ul>
        </div>
      )}
    </div>
  );
}
