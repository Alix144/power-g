"use client"
import FormBtn from "./FormBtn";
import { useFormStatus } from 'react-dom'
import LoadingSpinner from "./LoadingSpinner";

const NameForm = ({ addName }) => {
    const { pending } = useFormStatus()
    console.log(pending)
  return (
    <form action={addName}>
      <input name="name" type="text" disabled={pending && true}/>
      <button type="submit" className="main-btn-style">{pending ? <LoadingSpinner/> : "Submit"}</button>
    </form>
  );
};

export default NameForm;
