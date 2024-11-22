"use client"
import { deleteName } from "@/app/form/actions";

const DeleteForm = ({nameId}) => {
  return (
    <form action={deleteName}>
      <input type="text" name="nameId"  hidden value={nameId} onChange={()=>{}}/>
      <button type="submit" className="danger-btn-style">
        delete
      </button>
    </form>
  );
};

export default DeleteForm;
