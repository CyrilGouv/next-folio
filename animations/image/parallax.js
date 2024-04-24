import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


const animationsImageParallax = (trigger, img) => {
    gsap.set(
        img,
        {
            yPercent: -20,
            scale: 1.2
        }
    )
    gsap.to(
        img,
        {
            yPercent: 20,
            ease: "linear",
            scrollTrigger: {
                trigger: trigger,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            }
        }
    )
}

export default animationsImageParallax