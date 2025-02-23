import FormRegister from '@/components/layouts/auth/form-register'
import React from 'react'
import {auth} from "../../../../../auth"
import { redirect } from 'next/navigation'

async function Login() {
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

export default Login