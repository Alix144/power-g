import EditWorkout from "@/components/EditWorkout";
import Workout from "@/components/Workout";
import Image from "next/image";
import Link from "next/link";

export default function Dashboard() {
  return (
    <>
    <main className="mx-auto w-[70%]">
      <div className="mb-10 w-full flex justify-between">
        <input type="text" />
        <button className="main-btn-style">Add Workout</button>
      </div>

      <div className="flex gap-5 flex-wrap">
        <Workout/>
      </div>
    </main>

    <EditWorkout/>
    </>
  );
}
