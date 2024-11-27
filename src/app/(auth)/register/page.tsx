"use client";
import { useActionState } from "react";
import Link from "next/link";
import { signUpCredentials } from "@/lib/action";
import { RegisterButton } from "@/components/fragments/button";

export default function Register() {
  const [state, formAction] = useActionState(signUpCredentials, null);
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

        {state?.message ? (
        <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-100" role="alert">
          <span className="font-medium">
            {state?.message}
          </span>
        </div>
        ) : null}

        <form className="space-y-4" action={formAction}>
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <div className="relative mt-1">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <i className="bx bx-user text-xl"></i>
              </span>
              <input
                type="text"
                id="name"
                name="name"
                className="pl-10 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your name"
              />
            </div>
              <div aria-live="polite" aria-atomic="true">
                <span className="text-sm text-red-500 mt-2">
                  {state?.error?.name}
                </span>
              </div>
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
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
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
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
              />
            </div>
              <div aria-live="polite" aria-atomic="true">
                <span className="text-sm text-red-500 mt-2">
                  {state?.error?.password}
                </span>
              </div>
          </div>
          {/* Confirm Password Input */}
          <div>
            <label
              htmlFor="ConfirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <div className="relative mt-1">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <i className="bx bx-lock-alt text-xl"></i>
              </span>
              <input
                type="password"
                id="ConfirmPassword"
                name="ConfirmPassword"
                className="pl-10 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Confirm your password"
              />
            </div>
              <div aria-live="polite" aria-atomic="true">
                <span className="text-sm text-red-500 mt-2">
                  {state?.error?.ConfirmPassword}
                </span>
              </div>
          </div>
          {/* Submit Button */}
          <RegisterButton/>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Sudah punya akun?
          <a href="/login" className="text-blue-600 hover:underline">
            Login di sini
          </a>
        </p>
      </div>
    </div>
  );
}
