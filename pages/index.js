import axios from "axios";
import { useEffect, useState } from "react";

import AvailableContainer from "@/components/AvailableContainer/AvailableContainer";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/api/containers");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    data && (
      <>
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">Available Container</h2>
          {data.map(({ Names, State }) => (
            <AvailableContainer name={Names[0].slice(1)} state={State} />
          ))}
        </section>
      </>
    )
  );
}
