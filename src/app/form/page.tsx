"use client"
import React from 'react'
import dynamic from 'next/dynamic'

const FormBekerja = dynamic(() => import("@/components/layouts/form/bekerja"))

function page() {
  return (
    <main>
        <FormBekerja/>
    </main>
  )
}

export default page