"use client"
import React from 'react'
import { useState, useEffect } from "react";
import dayjs from "dayjs";


function Date() {
    const [time, setTime] = useState(dayjs());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(dayjs())
        }, 1000)
        return () => clearInterval(interval)
    }, [])
  return (
    <p>{time.format('dddd MM YYYY')}</p>
  )
}

export default Date