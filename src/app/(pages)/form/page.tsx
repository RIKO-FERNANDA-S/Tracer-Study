import React from 'react'
import dynamic from 'next/dynamic'
import { auth } from '../../../../auth'
import { redirect } from 'next/navigation'

const FormBekerja = dynamic(() => import("@/components/layouts/form/bekerja"))

async function page() {
  const session = await auth()
  if(!session?.user){
    redirect("/login")
  }
  
  return (
    <main>
        <FormBekerja/>
    </main>
  )
}

export default page