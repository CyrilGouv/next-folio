import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


const animationsLineReveal = line => {
    gsap.set(line, { scaleX: 0 })

    gsap.to(
        line, 
        { 
            scaleX: 1 ,
            duration: 1.125,
            ease: "expo.out",
            delay: .25,
            scrollTrigger: {
                trigger: line,
                start: "top bottom"
            }
        }
    )
}

export default animationsLineReveal