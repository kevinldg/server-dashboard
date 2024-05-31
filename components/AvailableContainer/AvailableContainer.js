import Link from "next/link";

export default function AvailableContainer({ name, state }) {
  return (
    <Link
      className="bg-neutral-700 p-3 flex justify-between items-center w-80 transition-transform hover:scale-[0.97]"
      href={`/containers/${name}`}
    >
      <p>{name}</p>
      <span
        className={`size-3 rounded-full ${
          state === "running" ? "bg-green-600" : "bg-red-600"
        }`}
      ></span>
    </Link>
  );
}
