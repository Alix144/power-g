import DeleteForm from "@/components/DeleteForm";
import Name from "@/lib/models/Name";

const Names = async () => {
  const data = await fetch("https://power-g.vercel.app/api/name", {cache: "force-cache"})
  const names = await data.json()

  return (
    <div>
      {names?.map((name) => (
        <div key={name._id} className="flex gap-3 my-5">
          <h3>{name.name}</h3>
         
        </div>
      ))}
    </div>
  );
};

export default Names;
