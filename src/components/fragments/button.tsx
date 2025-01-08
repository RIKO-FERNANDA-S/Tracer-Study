"use client"
import { signOutCredentials } from "@/lib/action";
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

export const LogoutButton =  () => { 
  return(
      <div className="flex w-max gap-4 text-md items-center ">
        <button
          onClick={signOutCredentials}
          className="px-6 py-3 text-white rounded-full bg-red-500"
        >
          <i className="bx bx-log-out"></i> Log out
        </button>
      </div>

  )
}
export const SubmitForm =  () => {
  const handleSubmit = async (e:any) => {
    e.preventDefault();

    alert("oke")
   
  } 
  return(
      <div className="flex w-max justify-center items-center ">
        <button
          type="submit"
          className=" btn btn-primary"
        >
          tambah
        </button>
      </div>

  )
}
 
