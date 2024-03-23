export function MinecraftVanillaForm() {
  const availableMinecraftVersions = [
    {
      title: "1.5.2",
      version: "1.5.2",
    },
    {
      title: "1.7.10",
      version: "1.7.10",
    },
    {
      title: "1.12.20",
      version: "1.12.20",
    },
    {
      title: "Neuste Version (Stable Release)",
      version: "1.20.4",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-2xl">Minecraft Vanilla</h2>
      <form className="flex flex-col gap-4 w-80">
        <div className="flex flex-col">
          <label>Name des Containers</label>
          <input
            id="containerName"
            name="containerName"
            type="text"
            placeholder="z.B. minecraft-server-01"
            className=" bg-neutral-200 p-1"
          />
        </div>
        <div className="flex flex-col">
          <label>Minecraft Version</label>
          <select id="minecraftVersion" name="minecraftVersion" className="p-1">
            {availableMinecraftVersions.map(({ title, version }) => (
              <option value={version}>{title}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label>Maximale Spieleranzahl</label>
          <input
            id="maxPlayers"
            name="maxPlayers"
            type="number"
            min="1"
            placeholder="z.B. 2"
            className=" bg-neutral-200 p-1"
          />
        </div>
        <button
          type="submit"
          className="w-fit bg-blue-500 text-white px-2 py-1 shadow hover:scale-[1.025] transition-transform"
        >
          Erstellen
        </button>
      </form>
    </div>
  );
}
