import NameForm from "@/components/NameForm";
import { addName } from "./actions";
import DeleteForm from "@/components/DeleteForm";

const from = async () => {
    const data = await fetch("http://localhost:3000/api/name", {cache: "force-cache"})
    const names = await data.json()
    return ( 
        <div className="w-full h-full">
            <h1>what is your name?</h1>
           
            <NameForm addName={addName}/>

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