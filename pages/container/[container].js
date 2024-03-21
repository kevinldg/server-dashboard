import BackToDashboard from "@/components/BackToDashboard/BackToDashboard";
import ContainerActions from "@/components/ContainerActions/ContainerActions";
import ContainerStatus from "@/components/ContainerStatus/ContainerStatus";
import SpecificDetails from "@/components/SpecificDetails/SpecificDetails";
import { useRouter } from "next/router";

const containerData = {
  id: "123456",
  image: "itzg/minecraft-server",
  created: "3 months ago",
  status: "running",
  name: "minecraft-server01",
};

// const specificData = {
//   containerType: "Gameserver",
//   details: {
//     game: "Minecraft Server",
//     minecraftVersion: "1.5.2",
//     forgeVersion: "361.187",
//     mods: ["Tinkers Construct", "Graves", "Journey's Map", "NotEnoughItems"],
//     playerLimit: 8,
//   },
// };

export default function ContainerDetails() {
  const router = useRouter();
  const { container } = router.query;

  return (
    <div className="flex flex-col gap-4">
      <BackToDashboard />
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{container}</h2>
        <ContainerStatus status={containerData.status} />
      </div>
      {/* {specificData && <SpecificDetails specificData={specificData} />} */}
      <ContainerActions />
      <div className="flex gap-4">
        <ul>
          <li>Container ID:</li>
          <li>Image:</li>
          <li>Created:</li>
          <li>Status:</li>
          <li>Name:</li>
        </ul>
        <ul>
          <li>{containerData.id}</li>
          <li>{containerData.image}</li>
          <li>{containerData.created}</li>
          <li>{containerData.status}</li>
          <li>{containerData.name}</li>
        </ul>
      </div>
    </div>
  );
}
