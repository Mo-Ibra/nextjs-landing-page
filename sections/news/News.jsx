// Images
import NewsImage1 from '../../assets/images/news/1.jpg';
import NewsImage2 from '../../assets/images/news/2.jpg';
import NewsImage3 from '../../assets/images/news/3.jpg';

import Card from './card/Card';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper';

import { useMediaQuery } from 'react-responsive';
import Title from '../../helpers/Title';

function News({ backgroundColor }) {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 980px)' });

    return (
        <section className={`py-10 ${backgroundColor}`} id='news'>
            <div className="container mx-auto px-10">
                <Title
                    header="Latest blog posts"
                    description="Different layouts and styles for team sections."
                />
                <Swiper
                    spaceBetween={50}
                    slidesPerView={isTabletOrMobile ? 1 : 3}
                    autoplay={{
                        delay: '2000'
                    }}
                    modules={[Autoplay]}
                >
                    <SwiperSlide>
                        <Card imageUrl={NewsImage1} badge="Muslims" title="Do you really understand the concept of product value?" author="Jane Martin" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card imageUrl={NewsImage2} badge="Arabian" title="Do you really understand the concept of product value?" author="Jane Martin" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card imageUrl={NewsImage3} badge="India" title="Do you really understand the concept of product value?" author="Jane Martin" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card imageUrl={NewsImage1} badge="France" title="Do you really understand the concept of product value?" author="Jane Martin" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card imageUrl={NewsImage2} badge="Landscape" title="Do you really understand the concept of product value?" author="Jane Martin" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default News