"use client"
import FormBtn from "./FormBtn";
import { useFormStatus } from 'react-dom'
import LoadingSpinner from "./LoadingSpinner";
import { addName } from "@/app/form/actions";

const NameForm = () => {
    const { pending } = useFormStatus()
  return (
    <form action={addName}>
      <input name="name" type="text" disabled={pending && true}/>
      <button type="submit" className="main-btn-style">{pending ? <LoadingSpinner/> : "Submit"}</button>
    </form>
  );
};

export default NameForm;
