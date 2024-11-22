"use server"

import { revalidatePath } from "next/cache";

export const addName = async( formdata ) => {
    const name = formdata.get("name")
    try {
        const response = await fetch(`${process.env.DOMAIN_NAME}/api/name`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name
          }),
        });
        revalidatePath("/form")
      } catch (error) {
        console.log(error)
      }
}

export const deleteName = async( formdata ) => {
    const nameId = formdata.get("nameId")
    try {
        const response = await fetch(`${process.env.DOMAIN_NAME}/api/name`, {
          method: "Delete",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            nameId
          }),
        });
        revalidatePath("/form")
      } catch (error) {
        console.log(error)
      }
}
