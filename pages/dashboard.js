export default function Dashboard() {
  const username = "GuNShOtzZ";
  const serverStatus = false;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <p className="text-2xl font-bold">Hello, {username}!</p>
        <p>
          Your server is currently{" "}
          {serverStatus ? (
            <span className="font-bold text-green-500">online</span>
          ) : (
            <span className="font-bold text-red-500">offline</span>
          )}
        </p>
      </div>
    </div>
  );
}
