import Image from "next/image";
import fs from "fs/promises";

import Navbar_client from "@/component/Navbar_client";

export default function Home() {

  console.log("I am Riku server")

  let a = fs.readFile(".gitignore")
  a.then(e => { console.log(e.toString()) })

  return (
    <div>
      <Navbar_client />
      I am a component
    </div>
  );
}
