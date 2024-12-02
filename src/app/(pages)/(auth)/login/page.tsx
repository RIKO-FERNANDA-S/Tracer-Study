import FormLogin from '@/components/layouts/auth/form-login'
import React from 'react'
import {auth} from "../../../../../auth"
import { redirect } from 'next/navigation'

async function Login() {
  const session = await auth()
  if (session?.user) {
    redirect("/dashboard")
  }
  return (
    <div>
      <FormLogin/>
    </div>
  )
}

export default Login