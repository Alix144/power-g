import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-between sm:justify-around items-center flex-col sm:flex-row">
      <div className="mb-5 sm:mb-0  w-full sm:w-[50%] flex flex-col gap-5 md:gap-10 text-center sm:text-left">
        <h1 className="text-3xl md:text-4xl lg:text-5xl">Master Progressive Overload</h1>
        <p className="text-sm sm:text-base">
          Login and start tracking, updating, and visualizing your workout
          progress effortlessly with PowerG.
        </p>
        <Link
          className="w-full h-8 sm:h-9 md:w-52 md:h-10 main-btn-style flex justify-center items-center"
          href={"/signin"}
        >
          Start Tracking
        </Link>
      </div>
      <div className="mb-10 sm:mb-0 w-[200px] h-[200px] md:h-[300px] xl:w-[400px] xl:h-[350px] relative">
        <Image src="/images/hero-img.png" alt="Logo" fill objectFit="contain"  />
      </div>
    </main>
  );
}
