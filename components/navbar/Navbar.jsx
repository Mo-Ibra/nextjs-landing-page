import Image from 'next/image';

import LogoImg from '../../assets/images/logo.png';

import { Link } from 'react-scroll';

function Navbar() {

    return (
        <nav className='py-5'>
            <div className="container mx-auto px-10">
                <div className="grid grid-cols-4 gap-8">
                    <div>
                        <Image src={LogoImg} alt='Logo' />
                    </div>
                    <div className='col-span-2 leading-8'>
                        <ul>
                            <li className='inline-block mx-4 text-gray-700 font-semibold cursor-pointer'>
                                <Link
                                    activeClass='active'
                                    to='home'
                                    smooth={true}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className='inline-block mx-4 text-gray-700 font-semibold cursor-pointer'>
                                <Link
                                    activeClass='active'
                                    to='traffic'
                                    smooth={true}
                                >
                                    Traffic
                                </Link>
                            </li>
                            <li className='inline-block mx-4 text-gray-700 font-semibold cursor-pointer'>
                                <Link
                                    activeClass='active'
                                    to='testimonials'
                                    smooth={true}
                                >
                                    Testimonials
                                </Link>
                            </li>
                            <li className='inline-block mx-4 text-gray-700 font-semibold cursor-pointer'>
                                <Link
                                    activeClass='active'
                                    to='team'
                                    smooth={true}
                                >
                                    Team
                                </Link>
                            </li>
                            <li className='inline-block mx-4 text-gray-700 font-semibold cursor-pointer'>
                                <Link
                                    activeClass='active'
                                    to='plans'
                                    smooth={true}
                                >
                                    Plans
                                </Link>
                            </li>
                            <li className='inline-block mx-4 text-gray-700 font-semibold cursor-pointer'>
                                <Link
                                    activeClass='active'
                                    to='news'
                                    smooth={true}
                                >
                                    News
                                </Link>
                            </li>
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