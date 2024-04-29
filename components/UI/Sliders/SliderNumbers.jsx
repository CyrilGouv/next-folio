"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { Swiper, SwiperSlide } from "swiper/react"
import { numbers } from "@/data/numbers"

import "swiper/css"
import styles from "./SliderNumbers.module.scss"
import animationsSliderParallax from "@/animations/slider/parallax"


const SliderNumbers = () => {

    // Element
    const sliderEl = useRef(null)

    // Animations
    useGSAP(() => {
        animationsSliderParallax(sliderEl.current, 8, -8)
    })

    return (
        <div ref={ sliderEl } className={ styles.slider }>
            <Swiper
                slidesPerView={ 1 }
                spaceBetween={ 20 }
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
                        slidesPerView: 3,
                        spaceBetween: 20
                    }
                }}
            >
                { numbers.map(({ id, title, text }) => (
                    <SwiperSlide key={ id }>
                        <div className={ styles.slider__slide }>
                            <h3 className={`${styles.slider__slide__title} text--XLarge`}>
                                <span 
                                    className={ styles.slider__slide__title__inner } 
                                    data-text={ title }
                                >
                                    { title }
                                </span>
                            </h3>
                            <p className={ `${styles.slider__slide__text} text--large` }>
                                <span 
                                    className={ styles.slider__slide__text__inner } 
                                    data-text={ text }
                                >
                                    { text }
                                </span>
                            </p>
                        </div>
                    </SwiperSlide>
                )) }
            </Swiper>
        </div>
    )
}

export default SliderNumbers