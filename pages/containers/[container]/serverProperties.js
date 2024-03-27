import { Editor } from "@monaco-editor/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import BackToDashboard from "@/components/BackToDashboard/BackToDashboard";

export default function ServerProperties() {
  const router = useRouter();

  const containerId = router.query.container;
  const containerName = router.query.containerName?.slice(1);

  const [data, setData] = useState(null);

  async function fetchData() {
    try {
      if (containerId) {
        const response = await axios.get(
          `/api/containers/${containerId}/serverProperties`,
          { params: { containerName } }
        );
        setData(response.data.stdout);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const saveData = async () => {
    try {
      if (containerId) {
        await axios.post(`/api/containers/${containerId}/serverProperties`, {
          content: data,
          containerName: containerName,
        });
        console.log("Data saved successfully");
      }
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const handleChange = (value) => {
    setData(value);
  };

  const handleSave = () => {
    saveData();
    setTimeout(() => {
      router.push("/dashboard");
    }, 1000);
  };

  useEffect(() => {
    fetchData();
  }, [containerId]);

  return (
    <>
      <BackToDashboard />
      <h2 className="font-bold text-xl">{containerName}</h2>
      <p>/home/{containerName}/server.properties</p>
      <Editor
        width="75vw"
        height="75vh"
        theme="vs-dark"
        loading="Editor wird geladen..."
        value={data}
        onChange={handleChange}
        options={{
          minimap: {
            enabled: false,
          },
        }}
      />
      <button
        onClick={handleSave}
        className="bg-blue-500 text-white px-2 py-1 rounded w-fit"
      >
        Speichern
      </button>
    </>
  );
}
