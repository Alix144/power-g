import Image from "next/image";

const LoginPage = () => {
  return (
    <section className="flex flex-col gap-10 items-center">
      <h1>Signin</h1>
      <div className="px-3 sm:px-5 py-2 w-64 bg-white rounded-[10px] text center border-silver border-2 flex gap-5 cursor-pointer hover:bg-silver duration-300">
        <Image
          src="/images/google.png"
          alt="Google icon"
          width="25"
          height="25"
          className=""
        />
        Sign in with Google
      </div>
    </section>
  );
};

export default LoginPage;
