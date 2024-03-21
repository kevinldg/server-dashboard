import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function BackToDashboard() {
  return (
    <Link href="/dashboard" className="flex items-center gap-4">
      <FontAwesomeIcon icon={faArrowLeft} /> <p>Zurück zum Dashboard</p>
    </Link>
  );
}
