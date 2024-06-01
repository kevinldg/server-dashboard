import {
  handleStartContainer,
  handleStopContainer,
  handleRestartContainer,
  handleDeleteContainer,
} from "./containerActionsFunctions";
import { useRouter } from "next/router";

export default function ContainerActions({ id, name, state }) {
  const router = useRouter();

  return (
    <div className="flex gap-4">
      <button
        onClick={() => handleStartContainer({ id, name, state, router })}
        className="bg-blue-700 px-2 py-1 rounded transition-transform hover:scale-[0.975]"
      >
        Start
      </button>
      <button
        onClick={() => handleStopContainer({ id, name, state, router })}
        className="bg-blue-700 px-2 py-1 rounded transition-transform hover:scale-[0.975]"
      >
        Stop
      </button>
      <button
        onClick={() => handleRestartContainer({ id, name, state, router })}
        className="bg-neutral-600 px-2 py-1 rounded transition-transform hover:scale-[0.975]"
      >
        Restart
      </button>
      <button
        onClick={() => handleDeleteContainer({ id, name, state, router })}
        className="bg-red-700 px-2 py-1 rounded transition-transform hover:scale-[0.975]"
      >
        Delete
      </button>
    </div>
  );
}
