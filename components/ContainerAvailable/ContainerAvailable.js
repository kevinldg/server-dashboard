import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDocker } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function ContainerAvailable({ id, name, state }) {
  return (
    <Link
      href={"/container/" + id}
      className=" bg-neutral-200 w-80 shadow hover:scale-[1.025] transition-transform"
    >
      <div className="px-4 py-2 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faDocker} />
          <h3>{name}</h3>
        </div>
        {state === "running" ? (
          <div className="bg-green-500 w-3 h-3 rounded-full"></div>
        ) : (
          <div className="bg-red-500 w-3 h-3 rounded-full"></div>
        )}
      </div>
    </Link>
  );
}
