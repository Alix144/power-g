import NameForm from "@/components/NameForm";
import DeleteForm from "@/components/DeleteForm";

const from = async () => {
    const data = await fetch(`${process.env.DOMAIN_NAME}/api/name`, {cache: "force-cache"})
    const names = await data.json()
    return ( 
        <div className="w-full h-full">
            <h1>what is your name?</h1>
           
            <NameForm/>

            <div>
                {names?.map((name)=>(
                    <div  key={name._id} className="flex gap-3 my-5">
                        <h3>{name.name}</h3>
                        <DeleteForm nameId={name._id}/>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default from;