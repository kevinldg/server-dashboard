export function SatisfactoryForm() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-2xl">Satisfactory</h2>
      <form className="flex flex-col gap-4 w-80">
        <div className="flex flex-col">
          <label>Name des Containers</label>
          <input
            id="containerName"
            name="containerName"
            type="text"
            placeholder="z.B. satisfactory-server-01"
            className=" bg-neutral-200 p-1"
          />
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
        <div className="flex flex-col">
          <label>Sicherungsintervall (in Minuten)</label>
          <input
            id={"option" + "SaveIntervalInMinutes"}
            name={"option" + "SaveIntervalInMinutes"}
            type="number"
            min="1"
            placeholder="z.B. 5 (Standard)"
            className=" bg-neutral-200 p-1"
          />
        </div>
        <div className="flex gap-4 justify-between items-center">
          <label>Automatischen Speichern beim Verlassen des Servers</label>
          <input
            id={"option" + "AutoSaveOnDisconnect"}
            name={"option" + "AutoSaveOnDisconnect"}
            type="checkbox"
            className=" bg-neutral-200 p-1 w-fit"
          />
        </div>
        <div className="flex gap-4 justify-between items-center">
          <label>Experimental</label>
          <input
            id={"option" + "Experimental"}
            name={"option" + "Experimental"}
            type="checkbox"
            className=" bg-neutral-200 p-1 w-fit"
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
