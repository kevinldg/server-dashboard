import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function BackToDashboard() {
  return (
    <Link
      className="font-bold flex items-center gap-4 w-fit transition-transform hover:scale-[0.97]"
      href="/"
    >
      <FontAwesomeIcon icon={faArrowLeft} />
      <p>Back to Dashboard</p>
    </Link>
  );
}
