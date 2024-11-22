"use server"

import { revalidatePath } from "next/cache";

export const addName = async( formdata ) => {
    const name = formdata.get("name")
    try {
        const response = await fetch("http://localhost:3000/api/name/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name
          }),
        });
        console.log("name added!!!!!!!")
        revalidatePath("/form")
      } catch (error) {
        console.log(error)
      }
}

export const deleteName = async( formdata ) => {
    const nameId = formdata.get("nameId")
    try {
        const response = await fetch("http://localhost:3000/api/name/", {
          method: "Delete",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            nameId
          }),
        });
        console.log("name deleted!!!!!!!")
        revalidatePath("/form")
      } catch (error) {
        console.log(error)
      }
}
