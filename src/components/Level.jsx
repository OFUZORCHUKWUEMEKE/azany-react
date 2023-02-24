import React from 'react'

const Refer = () => {
  return (
    <>
      <div className="w-4/5 mx-auto  mt-2 justify-center py-4">

        <div className='space-y-2 flex flex-col-reverse md:flex-row items-center'>
          <div className="flex-1 space-y-3">
            <h2 className="text-2xl font-bold hidden md:block">Refer Me</h2>
            <p >When you sign up as an affiliate and get assigned your referral link , next send the link to vendors/Merchants you know to sign up and you earn commision points or residual income for every signup.</p>
          </div>
          {/* <h2 className='md:text-3xl text-xl py-2 font-bold font-sans'>Refer Friends</h2> */}

          <div className='flex-1'>
            <img src="/images/refer.png" className="object-fit h-full w-full" />
          </div>
          <h2 className="text-2xl text-left font-bold  md:hidden">Refer Me</h2>
        </div>

      </div>
    </>
  )
}

export default Refer