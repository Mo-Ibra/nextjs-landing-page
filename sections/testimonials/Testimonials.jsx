import Image from 'next/image';
import styles from './testimonials.module.scss';

import TeamImg1 from '../../assets/images/testimonials/1.png';

import { AiFillStar } from 'react-icons/ai';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Autoplay } from 'swiper';

function Testimonials() {
    return (
        <section className={styles.testimonials} id='testimonials'>
            <div className="container mx-auto px-10 text-center text-white">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay={{
                        delay: '2000'
                    }}
                    modules={[Autoplay]}
                >
                    <SwiperSlide>
                        <Image src={TeamImg1} alt="Team" />
                        <h3>John Doe</h3>
                        <p className='text-sm text-gray-300 uppercase'>SEO OF Founser</p>
                        <div className='w-3/4 mx-auto my-5'>
                            <h5>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Vel corrupti cum voluptates cupiditate voluptate enim eos aliquam laudantium quas,
                                praesentium soluta laborum doloribus facere.
                            </h5>
                        </div>
                        <div className='my-5'>
                            <AiFillStar className='inline-block text-yellow-500 text-2xl' />
                            <AiFillStar className='inline-block text-yellow-500 text-2xl' />
                            <AiFillStar className='inline-block text-yellow-500 text-2xl' />
                            <AiFillStar className='inline-block text-yellow-500 text-2xl' />
                            <AiFillStar className='inline-block text-yellow-500 text-2xl' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={TeamImg1} alt="Team" />
                        <h3>John Doe</h3>
                        <p className='text-sm text-gray-300 uppercase'>SEO OF Founser</p>
                        <div className='w-3/4 mx-auto my-5'>
                            <h5>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Vel corrupti cum voluptates cupiditate voluptate enim eos aliquam laudantium quas,
                                praesentium soluta laborum doloribus facere.
                            </h5>
                        </div>
                        <div className='my-5'>
                            <AiFillStar className='inline-block text-yellow-500 text-2xl' />
                            <AiFillStar className='inline-block text-yellow-500 text-2xl' />
                            <AiFillStar className='inline-block text-yellow-500 text-2xl' />
                            <AiFillStar className='inline-block text-yellow-500 text-2xl' />
                            <AiFillStar className='inline-block text-yellow-500 text-2xl' />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default Testimonials