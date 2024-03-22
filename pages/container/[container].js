import BackToDashboard from "@/components/BackToDashboard/BackToDashboard";
import ContainerActions from "@/components/ContainerActions/ContainerActions";
import ContainerStatus from "@/components/ContainerStatus/ContainerStatus";
import SpecificDetails from "@/components/SpecificDetails/SpecificDetails";
import { useRouter } from "next/router";

import { useEffect, useState } from "react";
import axios from "axios";

export default function ContainerDetails() {
  const router = useRouter();
  const { container } = router.query;

  const [data, setData] = useState(null);
  const [envVariables, setEnvVariables] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        if (container) {
          const response = await axios.get("/api/containers/" + container);

          setData(response.data);
          setEnvVariables(response.data.Config?.Env);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [container]);

  return (
    <div className="flex flex-col gap-4">
      <BackToDashboard />
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{data && data.Name.slice(1)}</h2>
        <ContainerStatus status={data && data.State.Status} />
      </div>
      <SpecificDetails containerName={data?.Name} specificData={envVariables} />
      <ContainerActions id={data?.Id} />
      <div className="flex gap-4">
        <ul>
          <li>Container ID:</li>
          <li>Image:</li>
          <li>Created:</li>
          <li>Status:</li>
          <li>Name:</li>
        </ul>
        <ul>
          <li>{data && data.Id}</li>
          <li>{data && data.Config.Image}</li>
          <li>{data && data.Created}</li>
          <li>{data && data.State.Status}</li>
          <li>{data && data.Name.slice(1)}</li>
        </ul>
      </div>
    </div>
  );
}
