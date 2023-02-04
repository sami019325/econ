import React from 'react';
import sofa from './../../../resources/1ff6a2ba1ea8d347eb4725616990164a-removebg-preview.png'
import sofa2 from './../../../resources/images-removebg-preview.png'
import Offer from './Offer';

const Carosel = () => {
    return (
        <>
            <div className=' h-screen bg-indigo-200 hidden md:flex lg:flex-row-reverse gap-2'>
                <div className='flex justify-center items-center w-full lg:w-6/12'>
                    <img className='w-10/12' src={sofa} alt="" />
                </div>
                <div className='w-full lg:w-6/12 p-5 flex flex-col justify-center items-left gap-3'>
                    <small className='text-white'>Buy products at a reasonable price</small>
                    <h1 className='text-5xl text-white font-bold'>Get modern and high quality products</h1>
                    <p className='text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem animi maiores odit labore ab magnam deserunt incidunt, esse suscipit iure est facilis amet obcaecati magni tempore fugiat earum nostrum officiis.</p>
                    <button className='btn w-6/12'>BUY NOW</button>
                </div>
            </div>

            <div className='md:hidden h-screen bg-indigo-200 block gap-2'>
                <div className='flex justify-center items-center w-full lg:w-6/12'>
                    <img className='w-10/12' src={sofa} alt="" />
                </div>
                <div className='w-full lg:w-6/12 p-5 flex flex-col justify-center items-center gap-3'>
                    <h1 className='text-5xl text-white font-bold'>Get 50% off</h1>
                    <Offer></Offer>
                    <button className='btn w-full'>BUY NOW</button>
                </div>
            </div>
        </>
    );
};

export default Carosel;