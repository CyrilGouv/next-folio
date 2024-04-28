import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


const animationsCoverMove = (trigger, element) => {
    gsap.to(
        element,
        {
            yPercent: 70,
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

export default animationsCoverMove