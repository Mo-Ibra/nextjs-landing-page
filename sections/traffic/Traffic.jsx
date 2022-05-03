import TrafficImg from '../../assets/images/sections/2.png';
import Image from 'next/image';

import { AiFillCheckCircle } from 'react-icons/ai';

function Traffic() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-10">
                <div className="grid grid-cols-2">
                    <div>
                        <span className="text-blue-500 font-bold drop-shadow-md">Traffic</span>
                        <h3 className="text-5xl text-gray-900 font-bold my-2 drop-shadow-md">Stage reporting with 50k queries.</h3>
                        <p className="text-gray-700">
                            He nicked it tickety boo harry the cras bargy chap mush spiffing spend a penny the full monty burke butty.
                        </p>
                        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 my-5">
                            <div className='flex items-center'>
                                <div className='mr-4'>
                                    <AiFillCheckCircle className='text-blue-500 text-3xl drop-shadow-lg' />
                                </div>
                                <div>
                                    <h5 className='font-bold text-lg text-gray-700'>Carefully designed</h5>
                                    <p className='text-sm text-gray-500'>Mucker plastered bugger all mate morish are.</p>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <div className='mr-4'>
                                    <AiFillCheckCircle className='text-red-500 text-3xl drop-shadow-lg' />
                                </div>
                                <div>
                                    <h5 className='font-bold text-lg text-gray-700'>Choose a App</h5>
                                    <p className='text-sm text-gray-500'>Mucker plastered bugger all mate morish are.</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-8 my-5">
                            <div className='flex items-center'>
                                <div className='mr-4'>
                                    <AiFillCheckCircle className='text-green-500 text-3xl drop-shadow-lg' />
                                </div>
                                <div>
                                    <h5 className='font-bold text-lg text-gray-700'>Seamless Sync</h5>
                                    <p className='text-sm text-gray-500'>Mucker plastered bugger all mate morish are.</p>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <div className='mr-4'>
                                    <AiFillCheckCircle className='text-orange-500 text-3xl drop-shadow-lg' />
                                </div>
                                <div>
                                    <h5 className='font-bold text-lg text-gray-700'>User Interactive</h5>
                                    <p className='text-sm text-gray-500'>Mucker plastered bugger all mate morish are.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className='border border-slate-300 text-sm p-2 px-6 hover:bg-blue-500 hover:text-white duration-300 rounded-md'>Learn More</button>
                        </div>
                    </div>
                    <div>
                        <Image src={TrafficImg} alt="Traffic" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Traffic