"use client"
import Image from "next/image";

export default function Home() {

  const handleClick = async () => {

    const data = {
      name: "Riku",
      role: "Devloper"
    }

    let a = await fetch("/api/add", {
      method: "POST", headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })

    let res = await a.json()
    
    console.log(res)
  }

  return (
    <div>
      <h1 className="text-xl font-bold">Next.js Api routes demo</h1>
      <button className="btn border-2 bg-amber-200"  onClick={handleClick}>Click me</button>
    </div>
  );
}
