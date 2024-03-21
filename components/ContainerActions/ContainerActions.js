export default function ContainerActions() {
  return (
    <>
      <ul className="flex items-center gap-2">
        <li className=" bg-neutral-300 text-white px-2 py-1 shadow hover:scale-[1.025] transition-transform">
          Start
        </li>
        <li className=" bg-neutral-300 text-white px-2 py-1 shadow hover:scale-[1.025] transition-transform">
          Stopp
        </li>
        <li className=" bg-neutral-300 text-white px-2 py-1 shadow hover:scale-[1.025] transition-transform">
          Neustart
        </li>
        <li className=" bg-red-500 text-white px-2 py-1 shadow hover:scale-[1.025] transition-transform">
          Löschen
        </li>
      </ul>
    </>
  );
}
