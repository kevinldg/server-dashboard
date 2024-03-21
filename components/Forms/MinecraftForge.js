export default function MinecraftForgeForm() {
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

  const availableForgeVersions = [
    {
      title: "20.345.64.2",
      version: "20.345.64.2",
    },
    {
      title: "21.74.3.10",
      version: "21.74.3.10",
    },
    {
      title: "12.2.12.20",
      version: "12.2.12.20",
    },
    {
      title: "Neuste Version (Stable Release)",
      version: "24.20.14",
    },
  ];

  const availableMods = [
    {
      title: "Tinker's Construct",
      version: "1.0",
    },
    {
      title: "Journey's Map",
      version: "2.0",
    },
    {
      title: "NotEnoughItems",
      version: "3.0",
    },
    {
      title: "Graves",
      version: "4.0",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-2xl">Minecraft Forge</h2>
      <form className="flex flex-col gap-4 w-80">
        <div className="flex flex-col">
          <label>Name des Containers</label>
          <input
            id="containerName"
            name="containerName"
            type="text"
            placeholder="z.B. minecraft-forge-01"
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
          <label>Forge Version</label>
          <select id="forgeVersion" name="forgeVersion" className="p-1">
            {availableForgeVersions.map(({ title, version }) => (
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
            placeholder="z.B. 2"
            className=" bg-neutral-200 p-1"
          />
        </div>
        <p className="font-bold">Mods</p>
        {availableMods.map(({ title, version }) => (
          <div className="flex gap-4 justify-between items-center">
            <label>{title}</label>
            <input
              id={"mod" + title}
              name={"mod" + title}
              type="checkbox"
              className=" bg-neutral-200 p-1 w-fit"
            />
          </div>
        ))}
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
