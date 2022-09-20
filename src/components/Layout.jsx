import React from 'react'
import Sidebar from './Sidebar'

const Layout = ({children}) => {
  return (
     <>
       <div className='w-full flex'>
            <div className="w-[25%] hidden md:block ">
              <Sidebar/>
            </div>
            <main className="md:w-[75%] w-full">
              {children}
            </main>
       </div>
     </>
  )
}

export default Layout