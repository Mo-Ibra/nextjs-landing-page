import Image from 'next/image';
import styles from './header.module.scss';

import { AiFillAndroid, AiFillApple } from 'react-icons/ai';

import HeaderImg1 from '../../assets/images/header/1.png';
import HeaderImg2 from '../../assets/images/header/2.png';

function Header() {
    return (
        <header className='py-20' id='header'>
            <div className="container mx-auto px-10">
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className='mt-20'>
                        <span className='text-blue-500 font-semibold text-sm'>Welcome To Appie</span>
                        <h3 className='text-6xl font-bold text-gray-800 my-2'>Manage it all, in this all new system.</h3>
                        <p className='text-gray-500 w-3/4 my-5'>
                            Hanky panky lavatory up the duff jolly good cack
                            brolly is chinwag zonked happy days sloshed.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <div>
                            <div className='bg-gray-900 text-sm text-white rounded-md p-2 mx-2 inline-flex items-center cursor-pointer'>
                                <AiFillAndroid className='inline-block mr-2' />
                                <p>Download For IOS</p>
                            </div>
                            <div className='bg-gray-900 text-sm text-white rounded-md p-2 mx-2 inline-flex items-center cursor-pointer'>
                                <AiFillApple className='inline-block mr-2' />
                                <p>Download For Android</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.thumbs}`}>
                        <div>
                            <Image src={HeaderImg1} alt="Header" className={styles.headerImg1} />
                        </div>
                        <div className="absolute top-28 right-0 shadow-lg">
                            <Image src={HeaderImg2} alt="Header" className={styles.headerImg2} />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header