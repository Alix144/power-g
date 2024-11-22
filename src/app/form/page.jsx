import NameForm from "@/components/NameForm";
import Names from "@/components/Names";

const formPage = async () => {
  return (
    <div className="w-full h-full">
      <h1>what is your name?</h1>

      <NameForm />
      <Names />
    </div>
  );
};

export default formPage;
