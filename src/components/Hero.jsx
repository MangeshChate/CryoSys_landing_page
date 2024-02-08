import React from 'react'

const Hero = () => {
    return (
        <div className='container lg:h-[80vh] lg:mt-5 mt-10 grid lg:grid-cols-2 grid-cols-1 text-white '>
            <div className='flex flex-col justify-center items-center lg:order-1 order-2'>
                <div className='flex lg:p-0 ps-3 pe-3 flex-col lg:gap-5'>
                    <span className='text-3xl lg:text-5xl font-thin'>Empowering the Future with <span className='font-bold text-gradient'>
                        CryoSys</span> Technology</span><br />


                    <span className='lg:text-xl bg-blue-800 rounded-full lg:w-[20%] text-center items-center cursor-pointer lg:p-3 p-1 text-bold '>
                        About Us
                    </span>
                </div>
            </div>
            <div className='flex justify-center items-center w-full h-full lg:order-2 order-1'>
                <img src="https://png.pngtree.com/png-vector/20231214/ourmid/pngtree-holiday-holiday-earth-science-and-technology-elements-line-data-png-image_11353535.png" alt="earth.png" className="rounded-full filter w-full earth-rotation " />
            </div>


        </div>

    )
}

export default Hero
