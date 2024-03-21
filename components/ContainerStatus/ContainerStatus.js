export default function ContainerStatus({ status }) {
  return (
    <>
      {status === "running" ? (
        <span className="px-2 py-1 bg-green-500 text-white font-bold text-sm rounded shadow">
          Status: {status}
        </span>
      ) : (
        <span className="px-2 py-1 bg-red-500 text-white font-bold text-sm rounded shadow">
          Status: {status}
        </span>
      )}
    </>
  );
}
