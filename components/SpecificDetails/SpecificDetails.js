import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

export default function SpecificDetails({ containerName, specificData }) {
  const games = ["minecraft", "satisfactory"];
  const gameVariables = [
    // Minecraft
    "VERSION",
    "JAVA_VERSION",
    "FORGE_VERSION",
    "EULA",
    "MEMORY",
    "TYPE",
    // Satisfactory
    "MAXPLAYERS",
    "STEAMBETA",
    "AUTOSAVEINTERVAL",
    "AUTOSAVENUM",
    "AUTOSAVEONDISCONNECT",
    "MAXTICKRATE",
    "TIMEOUT",
  ];

  const isGameserver = games.find((game) => containerName?.includes(game))
    ? true
    : false;

  if (isGameserver)
    return (
      <div className="bg-blue-100 border-solid border-2 border-blue-200 p-2 flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <FontAwesomeIcon icon={faInfoCircle} />
          <p className="font-bold">Gameserver</p>
        </div>
        <div>
          <ul className=" list-disc text-sm ms-4">
            {specificData.map(
              (data) =>
                gameVariables.includes(data.split("=")[0]) && <li>{data}</li>
            )}
          </ul>
        </div>
      </div>
    );
}
