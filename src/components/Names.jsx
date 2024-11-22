import DeleteForm from "@/components/DeleteForm";
import LoadingSpinner from "@/components/LoadingSpinner";

const Names = async() => {
    const data = await fetch(`${process.env.DOMAIN_NAME}/api/name`, {
        cache: "force-cache",
      });
      const names = await data.json();
  return (
    <div>
      {names ? (
        names?.map((name) => (
          <div key={name._id} className="flex gap-3 my-5">
            <h3>{name.name}</h3>
            <DeleteForm nameId={name._id} />
          </div>
        ))
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default Names;
