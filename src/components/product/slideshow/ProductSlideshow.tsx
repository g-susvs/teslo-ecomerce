'use client';

import { useState } from 'react';

// Import Swiper React components
import { Swiper as SwiperObject } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './slideshow.css';
import Image from 'next/image';

interface Props {
    images: string[];
    title: string;
    className?: string;
}

export const ProductSlideshow = ({ className, title, images }: Props) => {

    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();

    return (
        <div className={className}>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                } as React.CSSProperties
                }
                spaceBetween={10}
                navigation={true}
                autoplay={{ delay: 2000 }}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                className="mySwiper2"
            >
                {
                    images.map(image => (
                        <SwiperSlide key={image}>
                            <Image
                                src={`/products/${image}`}
                                width={1020}
                                height={800}
                                alt={title}
                            />
                        </SwiperSlide>

                    ))
                }

            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                {
                    images.map(image => (
                        <SwiperSlide key={image}>
                            <Image
                                src={`/products/${image}`}
                                width={1020}
                                height={800}
                                alt={title}
                            />
                        </SwiperSlide>

                    ))
                }
            </Swiper>
        </div>
    )
}
