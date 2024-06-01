import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import BackToDashboard from "@/utils/BackToDashboard/BackToDashboard";
import ContainerActions from "@/utils/ContainerActions/ContainerActions";

export default function ContainerDetails() {
  const router = useRouter();
  const { container } = router.query;

  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        if (!container) {
          return;
        }

        const response = await axios.get("/api/containers/" + container);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [container]);

  return (
    data && (
      <section className="flex flex-col gap-4">
        <BackToDashboard />
        <h2 className="text-xl font-bold">{data.Name.slice(1)}</h2>
        <div className="flex gap-4">
          <ul>
            <li>ID:</li>
            <li>Name:</li>
            <li>Image:</li>
            <li>Status:</li>
            <li>Created:</li>
          </ul>
          <ul>
            <li>{data.Id}</li>
            <li>{data.Name.slice(1)}</li>
            <li>{data.Config.Image}</li>
            <li>{data.State.Status}</li>
            <li>{data.Created}</li>
          </ul>
        </div>
        <ContainerActions
          id={data.Id}
          name={data.Name.slice(1)}
          state={data.State.Status}
        />
      </section>
    )
  );
}
