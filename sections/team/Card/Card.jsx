import Image from 'next/image';
import React from 'react';
import { AiFillFacebook, AiFillTwitterSquare } from 'react-icons/ai'

function Card({ imageUrl, name, role }) {
    return (
        <div className='text-center shadow-lg pb-8 rounded-md relative my-5'>
            <div className="imageProvider cursor-pointer">
                <Image src={imageUrl} alt="Team" className='rounded-md' />
            </div>
            <div className="description mt-4">
                <h3 className='text-2xl font-bold text-gray-900'>{name}</h3>
                <span className='text-gray-500'>{role}</span>
            </div>
            <div className="absolute bottom-28 left-2">
                <div className='w-8 h-8 shadow-lg bg-white rounded-full text-center my-2 hover:bg-blue-500 hover:text-white duration-300'>
                    <AiFillFacebook className='mx-auto relative top-2' />
                </div>
                <div className='w-8 h-8 shadow-lg bg-white rounded-full text-center my-2 hover:bg-blue-500 hover:text-white duration-300'>
                    <AiFillTwitterSquare className='mx-auto relative top-2' />
                </div>
            </div>
        </div>
    )
}

export default Card