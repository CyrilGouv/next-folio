"use client"

import { useRef } from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { testimonials } from "@/data/testimonials"

import "swiper/css"
import styles from "./SliderTestimonials.module.scss"
import { useGSAP } from "@gsap/react"
import animationsSliderParallax from "@/animations/slider/parallax"


const SliderTestimonials = () => {

    // Elements
    const sliderWrapperEl = useRef(null)

    // Animations
    useGSAP(() => {
        animationsSliderParallax(sliderWrapperEl.current, 8, -8)
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
                        slidesPerView: 1,
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
        
            { testimonials.map((testimonial, idx) => (
                <SwiperSlide key={ idx }>
                    <div className={ styles.slider__slide }>
                        <Image 
                            width={ 65 }
                            height={ 65 }
                            className={ styles.slider__slide__avatar } 
                            src={ testimonial.avatar } 
                            alt={`Témoignage de ${testimonial.name} pour ${testimonial.company}`} 
                        />
                        <div className={ styles.slider__slide__content }>
                            <p className={ styles.slider__slide__text }>{ testimonial.text }</p>
                            <span className={ styles.slider__slide__name }>
                                <span 
                                    className={ styles.slider__slide__name__inner } 
                                    data-text={ testimonial.name }
                                >
                                    { testimonial.name }
                                </span>
                            </span>
                            <span className={ styles.slider__slide__separator }></span>
                            <span className={ `${styles.slider__slide__company} text--opacity` }>
                                <span 
                                    className={ styles.slider__slide__company__inner } 
                                    data-text={ testimonial.company }
                                >
                                    { testimonial.company }
                                </span>
                            </span>
                        </div>
                    </div>
                </SwiperSlide>
            )) }
        
            </Swiper>
        </div>
    )
}

export default SliderTestimonials