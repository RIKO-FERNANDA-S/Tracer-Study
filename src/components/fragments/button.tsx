"use client"
import { useFormStatus } from "react-dom";


export const RegisterButton = () => {
    const {pending} = useFormStatus();
  return (
    <div>
    <button
      type="submit"
      className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
    >
      {pending ? "Registering..." : "Register"}
    </button>
  </div>
  )
}



export const LoginButton = () => {
    const {pending} = useFormStatus();
  return (
    <div>
    <button
      type="submit"
      className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
    >
      {pending ? "Logining..." : "Login"}
    </button>
  </div>
  )
}
 
