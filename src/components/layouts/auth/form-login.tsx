"use client"
import { LoginButton } from "@/components/fragments/button";
import { signInCredentials } from "@/lib/action";
import { useActionState } from "react";

export default function FormLogin() {
  const [state, formAction] = useActionState(signInCredentials, null);
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
      {state?.message ? (
        <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-100" role="alert">
          <span className="font-medium">
            {state?.message}
          </span>
        </div>
        ) : null}
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form className="space-y-4" action={formAction}>
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="relative mt-1">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <i className="bx bx-envelope text-xl"></i>
              </span>
              <input
                type="email"
                id="email"
                name="email"
                className="pl-10 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your email"
                required
              />
            </div>
            <div aria-live="polite" aria-atomic="true">
                <span className="text-sm text-red-500 mt-2">
                  {state?.error?.email}
                </span>
              </div>
          </div>
          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative mt-1">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <i className="bx bx-lock text-xl"></i>
              </span>
              <input
                type="password"
                id="password"
                name="password"
                className="pl-10 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your password"
                required
              />
            </div>
            <div aria-live="polite" aria-atomic="true">
                <span className="text-sm text-red-500 mt-2">
                  {state?.error?.password}
                </span>
              </div>
          </div>
          {/* Submit Button */}
          <LoginButton/>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Belum punya akun?
          <a href="/register" className="text-blue-600 hover:underline">
            Daftar di sini
          </a>
        </p>
      </div>
    </div>
  );
}
