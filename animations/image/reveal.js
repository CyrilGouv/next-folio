import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


const animationsImageReveal = (trigger, element, horizontale = false, transformOrigin = "0% 0%") => {
    if (!horizontale) {
        gsap.set(element, { scaleY: 1, transformOrigin: transformOrigin })

        gsap.to(
            element, 
            { 
                scaleY: 0, 
                duration: 1.25, 
                ease: "expo.out",
                scrollTrigger: {
                    trigger: trigger,
                    start: "top bottom"
                }
            }
        )
    }

    if (horizontale) {
        gsap.set(element, { scaleX: 1, transformOrigin: "100% 100%" })

        gsap.to(
            element, 
            { 
                scaleX: 0, 
                duration: 1.25, 
                ease: "expo.out",
                scrollTrigger: {
                    trigger: trigger,
                    start: "top bottom"
                }
            }
        )
    }
    
}

export default animationsImageReveal