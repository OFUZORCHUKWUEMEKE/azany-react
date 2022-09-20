import React from 'react'

const Promo = () => {
   return (
      <>
         <div className='flex justify-center  flex-col-reverse md:flex-row items-center py-4 w-4/5 mx-auto'>
            <div className='flex-1'>
               <img src="/images/promo.png" />
            </div>
            <div className='space-y-3 flex-1'>
               <h2 className="text-3xl font-semibold hidden md:block">Get Promo Discounts</h2>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not </p>
            </div>
            <h2 className="text-2xl text-left font-bold  md:hidden">Get Promo Discounts</h2>
         </div>
      </>
   )
}

export default Promo