import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CurrentAction({ currentAction }) {
  if (!currentAction) {
    return null;
  }

  const [action, icon] = currentAction;

  return (
    <div className="p-2 w-fit flex gap-4 items-center bg-neutral-100 border-solid border-2 border-neutral-200">
      <FontAwesomeIcon icon={icon} />
      <p>
        {action === "start"
          ? "Container startet, bitte warten..."
          : action === "stop"
          ? "Container stoppt, bitte warten..."
          : action === "restart"
          ? "Container startet neu, bitte warten..."
          : action === "delete"
          ? "Container wird gelöscht, bitte warten..."
          : ""}
      </p>
    </div>
  );
}
