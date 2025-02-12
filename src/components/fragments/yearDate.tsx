"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import dayjs from 'dayjs'

function YearDate() {
    const [year, setYear] = useState(dayjs())

    useEffect(() => {
        const interval = setInterval(() => {
            setYear(dayjs())
        }, 1000)
        return () => clearInterval(interval)
    }, [])
  return (
    <p className='h-max'>
       {year.format('YYYY')} 
    </p>
  )
}

export default YearDate