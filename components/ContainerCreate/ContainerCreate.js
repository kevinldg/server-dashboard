import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDocker } from "@fortawesome/free-brands-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function ContainerCreate({ name }) {
  return (
    <Link
      href="/create"
      className=" bg-neutral-200 w-80 shadow hover:scale-[1.025] transition-transform"
    >
      <div className="px-4 py-2 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faDocker} />
          <h3>{name}</h3>
        </div>
        <FontAwesomeIcon icon={faPlus} />
      </div>
    </Link>
  );
}
