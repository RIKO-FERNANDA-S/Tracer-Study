"use client"
import React from 'react'
import { useEffect, useState } from "react";

function TotalSMK1() {
    const [total, setTotal] = useState<{ total: number } | null>(null);
  
    useEffect(() => {
      const fetchTotal = async () => {
        try {
          const response = await fetch("/api/dataSiswa/countSMK1");
          const data = await response.json()
          setTotal(data);
        } catch (error) {
          console.log(error)
        }
      }
  
      fetchTotal()
    }, []);
  return (
    <div>{total !== null ? total.total : 0}</div>
  )
}

export default TotalSMK1