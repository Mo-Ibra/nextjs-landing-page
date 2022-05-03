import Image from 'next/image';
import { AiOutlineFileSearch, AiOutlineSmile, AiOutlineShoppingCart, AiOutlineSound } from 'react-icons/ai';
import ShapesImg from '../../assets/images/shapes/1.png';

function Steps() {
    return (
        <section className="py-32 bg-slate-100 relative z-10">
            <div className="container mx-auto px-10">
                <div className="grid grid-cols-4 gap-8">
                    <div className="text-center bg-white hover:shadow-2xl shadow-lg duration-300 cursor-pointer border border-slate-100 py-8 px-5 rounded-sm">
                        <div className='w-14 h-14 bg-blue-500 rounded-md mx-auto relative my-5 shadow-lg'>
                            <AiOutlineFileSearch className='mx-auto text-3xl my-2 text-white absolute left-3 top-1' />
                        </div>
                        <h3 className="text-gray-700 font-bold text-2xl my-2">Searching</h3>
                        <p className="text-gray-500 text-sm">Mucker plastered bugger all mate morish are.</p>
                    </div>
                    <div className="text-center bg-white hover:shadow-2xl shadow-lg duration-300 cursor-pointer border border-slate-100 py-8 px-5 rounded-sm">
                        <div className='w-14 h-14 bg-red-500 rounded-md mx-auto relative my-5 shadow-lg'>
                            <AiOutlineSmile className='mx-auto text-3xl my-2 text-white absolute left-3 top-1' />
                        </div>
                        <h3 className="text-gray-700 font-bold text-2xl my-2">Designing</h3>
                        <p className="text-gray-500 text-sm">Mucker plastered bugger all mate morish are.</p>
                    </div>
                    <div className="text-center bg-white hover:shadow-2xl shadow-lg duration-300 cursor-pointer border border-slate-100 py-8 px-5 rounded-sm">
                        <div className='w-14 h-14 bg-green-500 rounded-md mx-auto relative my-5 shadow-lg'>
                            <AiOutlineShoppingCart className='mx-auto text-3xl my-2 text-white absolute left-3 top-1' />
                        </div>
                        <h3 className="text-gray-700 font-bold text-2xl my-2">Building</h3>
                        <p className="text-gray-500 text-sm">Mucker plastered bugger all mate morish are.</p>
                    </div>
                    <div className="text-center bg-white hover:shadow-2xl shadow-lg duration-300 cursor-pointer border border-slate-100 py-8 px-5 rounded-sm">
                        <div className='w-14 h-14 bg-orange-500 rounded-md mx-auto relative my-5 shadow-lg'>
                            <AiOutlineSound className='mx-auto text-3xl my-2 text-white absolute left-3 top-1' />
                        </div>
                        <h3 className="text-gray-700 font-bold text-2xl my-2">Supporting</h3>
                        <p className="text-gray-500 text-sm">Mucker plastered bugger all mate morish are.</p>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 right-0" style={{zIndex: '-1'}}>
                <Image src={ShapesImg} alt="Shapes" />
            </div>
        </section>
    )
}

export default Steps