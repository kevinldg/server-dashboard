export default function AuthSection() {
  const isLoggedIn = true;
  const username = "GuNShOtzZ";

  if (isLoggedIn) {
    return (
      <div className="flex items-center gap-4">
        <p>Eingeloggt als {username}</p>
        <button className="bg-red-500 shadow-md px-2 py-1 rounded">
          Ausloggen
        </button>
      </div>
    );
  }

  return (
    <>
      <button className="bg-blue-500 shadow-md px-2 py-1 rounded">Login</button>
    </>
  );
}
