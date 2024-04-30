import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


const animationsClipPath = (trigger, element) => {
    gsap.set(element, { clipPath: "circle(0%)" })

    gsap.to(element, {
        clipPath: "circle(50%)", 
        duration: .825, 
        ease: "expo.out",
        scrollTrigger: {
            trigger: trigger,
            start: "top bottom"
        }
    })
}

export default animationsClipPath