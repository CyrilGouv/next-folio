import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger" 

gsap.registerPlugin(ScrollTrigger)

const animationsTitleArrowReveal = element => {
    gsap.set(element, { xPercent: -110 })
    
    gsap.to(element, { xPercent: 0, duration: 1.125, ease: "expo.out" })
    
}

export default animationsTitleArrowReveal