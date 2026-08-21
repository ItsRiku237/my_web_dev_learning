// import fs from "fs/promises"

import submit_action from "@/action/form"


export default function Home() {

  // const submit_action = async (formData)=>{
  //   "use server"
  //   console.log(formData.get("name") , formData.get("add"))
  //   const a = await fs.writeFile("Riku.txt" , `Name is ${formData.get("name")} and address is ${formData.get("add")}`)
  // }

  return (
    <div className="bg-amber-600 h-60 w-100 p-2  flex justify-center">

      <form action={submit_action}>

        <div>
          <label htmlFor="name">Name</label>
          <input name="name" id="name" className="bg-yellow-100" type="text" />
        </div>

        <div>
          <label htmlFor="add">Address</label>
          <input name="add" id="add" className="bg-yellow-100" type="text" />
        </div>

        <button type="submit" className="border border-gray-600 bg-amber-900 p-2 m-2 ">Submit</button>

      </form>

    </div>
  );
}
