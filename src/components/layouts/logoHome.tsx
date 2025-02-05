import React from 'react'
import Image from 'next/image'
import LogoMawa1 from "../../../public/imgLogo/mawa1.png"
import LogoMawa2 from "../../../public/imgLogo/smk2.png"
import SMKPK from "../../../public/imgLogo/smkpk.png"
import SMKBisa from "../../../public/imgLogo/smkbisa.png"
import SMA from "../../../public/imgLogo/sma.png"
import SMADoubleTrack from "../../../public/imgLogo/smadoubletrack.png"
import Lokasi from "../../../public/imgLogo/lokasi.png"

function LogoHome() {
  return (
    <main className='w-full h-max py-5 px-7 bg-biruMawa2'>
        <div className='flex gap-20 items-center justify-center'>
            <Image src={LogoMawa1} alt='mawa1' className='w-24 h-auto'></Image>
            <Image src={Lokasi} alt='mawa1' className='w-auto h-24'></Image>
            <Image src={LogoMawa2} alt='mawa1' className='w-24 h-auto'></Image>
            <Image src={SMKBisa} alt='mawa1' className='w-auto h-16'></Image>
            <Image src={SMA} alt='mawa1' className='w-20 h-auto'></Image>
            <Image src={SMADoubleTrack} alt='mawa1' className='w-auto h-24'></Image>
            <Image src={SMKPK} alt='mawa1' className='w-24 h-auto'></Image>
        </div>
    </main>
  )
}

export default LogoHome