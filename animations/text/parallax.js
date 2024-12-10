import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


const animationsTextParallax = (trigger, text, fromXPercent = 65, toXPercent = -65) => {
    gsap.set(text, { xPercent: fromXPercent })

    gsap.to(text, {
        xPercent: toXPercent,
        scrollTrigger: {
            trigger: trigger,
            start: "top bottom",
            end: "bottom top",
            scrub: .25,
            invalidateOnRefresh: true
      }
    })
}

export default animationsTextParallax