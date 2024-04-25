import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


const animationsSliderParallax = (slider, fromXPercent, toXPercent) => {
    // Settings
    gsap.set(slider, { xPercent: fromXPercent })

    // Animations
    gsap.to(slider, {
        xPercent: toXPercent,
        scrollTrigger: {
            trigger: slider,
            start: "top bottom",
            scrub: true,
            invalidateOnRefresh: true,
            invalidateOnResize: true,
        } 
    })
}

export default animationsSliderParallax
