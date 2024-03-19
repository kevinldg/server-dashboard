export default function ServerStatus() {
  const serverStatus = false;

  return (
    <p>
      Der Server ist aktuell{" "}
      {serverStatus ? (
        <span className="font-bold text-green-500">online</span>
      ) : (
        <span className="font-bold text-red-500">offline</span>
      )}
    </p>
  );
}
