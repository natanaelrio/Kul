'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from '@/components/latihan.module.css'
// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

export default function Latihan() {

    const gallerySwiperParams = {
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction'
        },

        navigation: false,
        modules: [Pagination, Navigation]
    };

    const swiperRef = useRef(null);
    const goNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };
    const goPrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
        <div className={styles.container}>
            <Swiper
                ref={swiperRef}
                {...gallerySwiperParams}
            >
                <SwiperSlide><Image src={`https://images.unsplash.com/photo-1593720213428-28a5b9e94613`} width={500} height={500} alt='siapp'></Image></SwiperSlide>
                <SwiperSlide><Image src={`https://images.unsplash.com/photo-1593720213428-28a5b9e94613`} width={500} height={500} alt='siapp'></Image></SwiperSlide>
                <SwiperSlide><Image src={`https://images.unsplash.com/photo-1593720213428-28a5b9e94613`} width={500} height={500} alt='siapp'></Image></SwiperSlide>
                <SwiperSlide><Image src={`https://images.unsplash.com/photo-1593720213428-28a5b9e94613`} width={500} height={500} alt='siapp'></Image></SwiperSlide>
                <SwiperSlide><Image src={`https://images.unsplash.com/photo-1593720213428-28a5b9e94613`} width={500} height={500} alt='siapp'></Image></SwiperSlide>
                <SwiperSlide><Image src={`https://images.unsplash.com/photo-1593720213428-28a5b9e94613`} width={500} height={500} alt='siapp'></Image></SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
            <div className={styles.tombolnextprev}>
                <button onClick={goPrev}>Prev</button>
                <button onClick={goNext}>Next</button>
            </div>

        </div>
    )
}
