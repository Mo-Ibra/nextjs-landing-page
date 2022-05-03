import { AiFillCheckCircle } from 'react-icons/ai';

function Card({ name, price, isActive = false, features, badge = null}) {
    return (
        <div className="bg-white shadow-md p-8 border border-slate-100 relative">
            <span className="text-blue-500 font-bold text-sm">{name}</span>
            <h3 className="text-4xl font-bold text-gray-900 my-2">$ {price} <span className="text-sm text-gray-500">/month</span> </h3>
            <p className="text-sm text-gray-500">Get your 14 day free trial</p>
            <hr className="my-5" />
            {
                features.map((feature) => (
                    <div className="flex items-center my-2" key={feature}>
                        <AiFillCheckCircle className={` ${isActive ? 'text-blue-500' : 'text-blue-500'} text-lg mr-2`} />
                        <p className='text-gray-500'>{feature}</p>
                    </div>
                ))
            }
            <div className='mt-10'>
                {
                    isActive ? (
                        <button className='py-2 px-8 border border-slate-200 rounded-lg bg-blue-500 text-white duration-300'>Choose Plan</button>
                    ) : (
                        <button className='py-2 px-8 border border-slate-200 rounded-lg hover:bg-blue-500 hover:border-blue-500 hover:text-white duration-300'>Choose Plan</button>
                    )
                }
            </div>
            {
                badge && (
                    <div className="absolute top-0 right-0 text-white bg-blue-500 py-2 px-4 rounded-3xl text-xs shadow-lg">
                        <p>{badge}</p>
                    </div>
                )
            }
        </div>
    )
}

export default Card