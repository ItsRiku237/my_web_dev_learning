"use server"

import fs from "fs/promises"


const submit_action = async (formData) => {
    console.log(formData.get("name"), formData.get("add"))
    const a = await fs.writeFile("Riku.txt", `Name is ${formData.get("name")} and address is ${formData.get("add")}`)
}

export default submit_action