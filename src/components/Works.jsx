import React from 'react'

const Works = () => {
    return (
        <>
            <div className='bg-white p-4 py-6'>
                <div className="w-4/5 mx-auto py-2">
                    <h2 className='text-center text-2xl font-bold'>How It Works</h2>
                    <div className="flex flex-col md:flex-row items-center justify-center py-4 mt-4">
                        <div className='space-y-4 flex flex-col justify-center items-center text-center w-4/5 flex-1'>
                            <img src="/images/icons (1).png"/>
                            <h2 className="font-bold text-xl">Copy Referral Code</h2>
                            <div>
                                <p>Send your referral code to your</p>
                                <p> friends and tell them about our referral program</p>
                            </div>
                            
                        </div>
                        <div className='space-y-4 flex flex-col justify-center items-center text-center w-4/5 flex-1'>
                            <img src="/images/icons (2).png"/>
                            <h2 className="font-bold text-xl">Registration</h2>
                            <div>
                                <p>They get registered on the </p>
                                <p>Shopazany platform using your referral link. </p>
                            </div>
                            
                        </div>
                        <div className='space-y-4 flex flex-col justify-center items-center text-center w-4/5 flex-1'>
                            <img src="/images/icons (3).png"/>
                            <h2 className="font-bold text-xl">Recieve Cash</h2>
                            <div>
                                <p>You and your friends will</p>
                                <p> receive  free cash and discounts </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Works;