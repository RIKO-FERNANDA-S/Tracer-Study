"use client";
import Image from "next/image";
import Logo from "../../../../public/imgLogo/mawalogox-1536x300.png";
import { createData } from "@/lib/action";
import { useActionState } from "react";
import { useState } from "react";
import { prisma } from "@/lib/prisma";
import { SubmitForm } from "@/components/fragments/button";


function Form() {
  const [name, setName] = useState("")

  const handleName =  (e:any) => {
    setName(e.terget.value)
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const reponse = await fetch('/api/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: name })
    });
    const result = await reponse.json()
    console.log(result)
  }

  return (
    <main className="w-full h-max">
      <header className="w-full h-max  py-6 flex justify-center">
        <nav>
          <Image src={Logo} className="w-60" alt="logo"></Image>
        </nav>
      </header>

      <section className="w-full h-max flex flex-col px-4 mt-5">
        <h1 className="text-2xl">Formulir Survey</h1>
        <span>
          <h1 className="block text-gray-700 text-sm font-bold mb-2">
            Data Pribadi
          </h1>
        </span>

        <form className="flex w-full items-center py-4" onSubmit={handleSubmit} >
          <div className="flex  flex-wrap w-full justify-center gap-7 border-y-2 border-cyan-200 py-4">
            <h1>name</h1>
            <input type="text" className="" id="name" name="name" onChange={(e) => handleName} />
           
         <SubmitForm />
          </div>

        </form>
      </section>
    </main>
  );
}

export default Form;
