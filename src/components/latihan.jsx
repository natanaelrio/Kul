'use client'
import React, { useRef, useEffect, useState } from 'react';

export default function Latihan() {

    const targetRef = useRef(null);
    const [isScrollPast, setIsScrollPast] = useState(false);


    useEffect(() => {
        function handleScroll() {
            const { top } = targetRef.current.getBoundingClientRect();
            // Jika posisi top lebih kecil dari 0, berarti scroll telah melewati target
            setIsScrollPast(top < 0);
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div style={{ height: '2000px' }}>Scroll ke bawah</div>
            <div ref={targetRef} style={{ height: '200px', backgroundColor: isScrollPast ? 'red' : 'transparent' }}>
                Scroll melewati ID
            </div>
            <div style={{ height: '1000px' }}>Scroll ke atas</div>
        </div>
    )
}
