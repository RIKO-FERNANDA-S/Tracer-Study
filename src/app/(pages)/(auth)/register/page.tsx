import FormRegister from '@/components/layouts/auth/form-register'
import React from 'react'
import {auth} from "../../../../../auth"
import { redirect } from 'next/navigation'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Tracer Study Mawa",
  description: "tracer study",
  icons: "/logo.svg",
};

async function Register() {
  const session = await auth()
  if (session?.user.role !== "admin") {
    redirect("/")
  }
  return (
    <div>
     <FormRegister/>
    </div>
  )
}

export default Register