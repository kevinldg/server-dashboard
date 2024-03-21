import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

export default function SpecificDetails({ specificData }) {
  return (
    <div className="bg-blue-100 border-solid border-2 border-blue-200 p-2 flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <FontAwesomeIcon icon={faInfoCircle} />
        <p className="font-bold">{specificData.containerType}</p>
      </div>
      <div>
        <ul className="list-disc ms-6 text-sm">
          <li>{specificData.details.game}</li>
          <li>Minecraft Version: {specificData.details.minecraftVersion}</li>
          <li>
            Forge Version: {specificData.details.forgeVersion}
            <ul className="list-disc ms-4 mb-4 text-xs">
              {specificData.details.mods.map((mod) => (
                <li>{mod}</li>
              ))}
            </ul>
          </li>
          <li>Spieler Limit: {specificData.details.playerLimit}</li>
        </ul>
      </div>
    </div>
  );
}
