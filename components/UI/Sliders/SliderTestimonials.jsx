"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { Swiper, SwiperSlide } from "swiper/react"
import CardSliderTestimonial from "../Cards/CardSliderTestimonial"
import animationsSliderParallax from "@/animations/slider/parallax"

import { testimonials } from "@/data/testimonials"

import "swiper/css"
import styles from "./SliderTestimonials.module.scss"


const SliderTestimonials = () => {

    // Elements
    const sliderWrapperEl = useRef(null)

    // Animations
    useGSAP(() => {
        animationsSliderParallax(sliderWrapperEl.current, 8, 0)
    })

    return (
        <div 
            ref={ sliderWrapperEl } 
            className={ styles.slider }
        >
            <Swiper
                slidesPerView={ 2 }
                spaceBetween={ 40 }
                breakpoints={{
                    0: {
                        slidesPerView: 1.25,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    1400: {
                        slidesPerView: 2,
                        spaceBetween: 40
                    }
                }}
            >
        
            { testimonials.map(({ avatar, name, text, company }, idx) => (
                <SwiperSlide 
                    key={ idx }
                >
                    <CardSliderTestimonial 
                        avatar={ avatar }
                        name={ name }
                        testimonial={ text }
                        company={ company }
                    />
                </SwiperSlide>
            )) }
        
            </Swiper>
        </div>
    )
}

export default SliderTestimonials