import { AiFillStar, AiOutlineFacebook, AiOutlineTwitter, AiOutlineGithub } from 'react-icons/ai'

function Footer({theme}) {
    return (
        <>
            <footer className={`py-10 border-t border-slate-200 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'text-gray-700'}`}>
                <div className="container mx-auto px-10">
                    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div>
                            <h1 className='font-bold text-4xl mb-4'> <span className='text-blue-600 italic'>L</span>ogo</h1>
                            <p>
                                Our latest news, articles, and resources, we will sent to your inbox weekly.
                            </p>
                            <input type="text" placeholder='Enter you email' className='border border-slate-200 outline-none px-4 py-2 my-4 rounded-lg block' />
                            <span className='font-semibold'>10/10 Overall rating</span>
                            <div className="rate">
                                <AiFillStar className='inline-block text-yellow-500' />
                                <AiFillStar className='inline-block text-yellow-500' />
                                <AiFillStar className='inline-block text-yellow-500' />
                                <AiFillStar className='inline-block text-yellow-500' />
                                <AiFillStar className='inline-block text-yellow-500' />
                            </div>
                        </div>
                        <div>
                            <h3 className='text-lg mb-4 font-bold'>Primary Pages</h3>
                            <ul>
                                <li className='my-2 cursor-pointer'>Home</li>
                                <li className='my-2 cursor-pointer'>About Us</li>
                                <li className='my-2 cursor-pointer'>Services</li>
                                <li className='my-2 cursor-pointer'>Career</li>
                                <li className='my-2 cursor-pointer'>Integrations</li>
                                <li className='my-2 cursor-pointer'>Integrations Single</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='text-lg mb-4 font-bold'>Primary Pages</h3>
                            <ul>
                                <li className='my-2 cursor-pointer'>Home</li>
                                <li className='my-2 cursor-pointer'>About Us</li>
                                <li className='my-2 cursor-pointer'>Services</li>
                                <li className='my-2 cursor-pointer'>Career</li>
                                <li className='my-2 cursor-pointer'>Integrations</li>
                                <li className='my-2 cursor-pointer'>Integrations Single</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='text-lg mb-4 font-bold'>Primary Pages</h3>
                            <ul>
                                <li className='my-2 cursor-pointer'>Home</li>
                                <li className='my-2 cursor-pointer'>About Us</li>
                                <li className='my-2 cursor-pointer'>Services</li>
                                <li className='my-2 cursor-pointer'>Career</li>
                                <li className='my-2 cursor-pointer'>Integrations</li>
                                <li className='my-2 cursor-pointer'>Integrations Single</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <hr />
            <div className={`copyRight py-5 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'text-gray-700'} `}>
                <div className="container mx-auto px-10">
                    <div className="flex justify-between">
                        <p>&copy; 2022 Quiety Rights Reserved.</p>
                        <div>
                            <div className='inline-block shadow-lg p-2 border border-slate-200 mx-1 cursor-pointer'>
                                <AiOutlineFacebook />
                            </div>
                            <div className='inline-block shadow-lg p-2 border border-slate-200 mx-1 cursor-pointer'>
                                <AiOutlineTwitter />
                            </div>
                            <div className='inline-block shadow-lg p-2 border border-slate-200 mx-1 cursor-pointer'>
                                <AiOutlineGithub />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer