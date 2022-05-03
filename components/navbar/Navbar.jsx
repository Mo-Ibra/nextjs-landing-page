import Image from 'next/image';

import LogoImg from '../../assets/images/logo.png';

function Navbar() {
    return (
        // Box shadow..
        <nav className='py-5'>
            <div className="container mx-auto px-10">
                <div className="grid grid-cols-4 gap-8">
                    <div>
                        <Image src={LogoImg} alt='Logo' />
                    </div>
                    <div className='col-span-2 leading-8'>
                        <ul>
                            <li className='inline-block mx-4 text-gray-700 font-semibold cursor-pointer'>Home</li>
                            <li className='inline-block mx-4 text-gray-700 font-semibold cursor-pointer'>Something</li>
                            <li className='inline-block mx-4 text-gray-700 font-semibold cursor-pointer'>Else</li>
                            <li className='inline-block mx-4 text-gray-700 font-semibold cursor-pointer'>Testimonials</li>
                            <li className='inline-block mx-4 text-gray-700 font-semibold cursor-pointer'>Team</li>
                            <li className='inline-block mx-4 text-gray-700 font-semibold cursor-pointer'>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <button className='px-4 py-2 mx-2 border border-slate-200 hover:bg-blue-500 hover:text-white duration-300 rounded-lg text-sm'>Login</button>
                        <button className='px-4 py-2 mx-2 bg-blue-500 text-white rounded-lg text-sm'>Get Started</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar