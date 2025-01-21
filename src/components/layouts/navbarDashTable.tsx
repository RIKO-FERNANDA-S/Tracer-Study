import React from 'react'

function NavbarDashTable() {
  return (
    <main>
        <header className='w-full'>
        <div className='mb-8'>
        <h1 className='text-2xl font-semibold'>Data SMKS Darma Siswa 1</h1>
        </div>
        <div className='w-full flex justify-between'>
          <div className='bg-white shadow-md h-max py-3 px-5 rounded-[.8rem] flex items-center gap-4'>
          <i className='bx bx-search-alt bx-sm'></i>
          <input className='bg-transparent focus:outline-none' placeholder='Search...'/>
          </div>
          <div className='flex items-center gap-5'>
            <button className='py-3 px-5 flex gap-2 items-center text-md bg-none border border-blue-400 rounded-[.5rem] text-blue-400 hover:bg-blue-300 hover:text-white transition-all ease-in-out'>Filter <i className='bx bx-filter bx-sm' ></i></button>
            <button className='py-3 px-5 flex gap-2 items-center text-md bg-blue-400 rounded-[.5rem] hover:bg-blue-300 text-white transition-all ease-in-out'>Add Student <i className='bx bx-user-plus bx-sm' ></i></button>
          </div>
        </div>
      </header>
    </main>
  )
}

export default NavbarDashTable