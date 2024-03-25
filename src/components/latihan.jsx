'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';

import { Controller } from 'swiper/modules';
import { Thumbs } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from '@/components/latihan.module.css'

// import required modules
import { Pagination, Navigation, FreeMode } from 'swiper/modules';
import Image from 'next/image';

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function Latihan() {
    const swiper = useSwiper();
    const [angka, setAngka] = useState(0)

    const gallerySwiperParams = {
        pagination: {
            type: 'fraction'
        },
        initialSlide: angka,
        navigation: true,
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

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className={styles.containerswipper}>
            <div className={styles.containerdalamswipper}>
                <Swiper
                    modules={[FreeMode, Thumbs, Navigation]}
                    thumbs={{ swiper: thumbsSwiper }}
                    ref={swiperRef}
                    // navigation={true}
                    loop={true}
                    className='mySwipper2'
                >
                    <SwiperSlide><Image src={`https://picsum.photos/320/240?v1`} width={500} height={500} alt='siapp'></Image></SwiperSlide>
                    <SwiperSlide><Image src={`https://picsum.photos/320/240?v2`} width={500} height={500} alt='siapp'></Image></SwiperSlide>
                    <SwiperSlide><Image src={`https://picsum.photos/320/240?v3`} width={500} height={500} alt='siapp'></Image></SwiperSlide>
                    <SwiperSlide><Image src={`https://picsum.photos/320/240?v4`} width={500} height={500} alt='siapp'></Image></SwiperSlide>
                    <SwiperSlide><Image src={`https://picsum.photos/320/240?v5`} width={500} height={500} alt='siapp'></Image></SwiperSlide>
                    <SwiperSlide><Image src={`https://picsum.photos/320/240?v6`} width={500} height={500} alt='siapp'></Image></SwiperSlide>
                    <SwiperSlide><Image src={`https://picsum.photos/320/240?v7`} width={500} height={500} alt='siapp'></Image></SwiperSlide>
                    <SwiperSlide><Image src={`https://picsum.photos/320/240?v8`} width={500} height={500} alt='siapp'></Image></SwiperSlide>
                    <SwiperSlide><Image src={`https://picsum.photos/320/240?v9`} width={500} height={500} alt='siapp'></Image></SwiperSlide>
                </Swiper>

                <div className={styles.bawah}>
                    <Swiper
                        loop={true}
                        onSwiper={setThumbsSwiper}
                        spaceBetween={5}
                        slidesPerView={5}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Thumbs, Navigation]}
                        className='mySwipper'
                        // style={{ width: '300px!important' }}
                    >
                        <SwiperSlide><Image src={`https://picsum.photos/320/240?v1`} width={500} height={500} alt='siapp'></Image></SwiperSlide>
                        <SwiperSlide><Image src={`https://picsum.photos/320/240?v2`} width={500} height={500} alt='siapp'></Image></SwiperSlide>
                        <SwiperSlide><Image src={`https://picsum.photos/320/240?v3`} width={500} height={500} alt='siapp'></Image></SwiperSlide>
                        <SwiperSlide><Image src={`https://picsum.photos/320/240?v4`} width={500} height={500} alt='siapp'></Image></SwiperSlide>
                        <SwiperSlide><Image src={`https://picsum.photos/320/240?v5`} width={500} height={500} alt='siapp'></Image></SwiperSlide>
                        <SwiperSlide><Image src={`https://picsum.photos/320/240?v6`} width={500} height={500} alt='siapp'></Image></SwiperSlide>
                        <SwiperSlide><Image src={`https://picsum.photos/320/240?v7`} width={500} height={500} alt='siapp'></Image></SwiperSlide>
                        <SwiperSlide><Image src={`https://picsum.photos/320/240?v8`} width={500} height={500} alt='siapp'></Image></SwiperSlide>
                        <SwiperSlide><Image src={`https://picsum.photos/320/240?v9`} width={500} height={500} alt='siapp'></Image></SwiperSlide>

                    </Swiper>

                    <div className={styles.tombolnextprev}>
                        <div onClick={goPrev}><IoIosArrowBack className={styles.logo} /></div>
                        <div onClick={goNext}><IoIosArrowForward className={styles.logo} /></div>
                    </div>
                </div>


            </div>
        </div >
    )
}
