import DeleteForm from "@/components/DeleteForm";
import Name from "@/lib/models/Name";

const Names = async () => {
  const names = await Name.find();
  
  return (
    <div>
      {names?.map((name) => (
        <div key={name._id} className="flex gap-3 my-5">
          <h3>{name.name}</h3>
          <DeleteForm nameId={name._id.toString()} />
        </div>
      ))}
    </div>
  );
};

export default Names;
