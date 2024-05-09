import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


export const animationsTagReveal = (trigger, tagWrapper, tagText, delay) => {
    // Settings
    gsap.set(tagWrapper, { scaleX: 0 })
    gsap.set(tagText, { yPercent: 100 })

    // Timeline
    const timeline = gsap.timeline({ 
        delay: delay, 
        scrollTrigger: {
            trigger: trigger,
            start: "top bottom",
        } 
    })

    timeline
        .to(tagWrapper, {
            scaleX: 1, 
            duration: .825,
            ease: "expo.out",
        })
        .to(tagText, {
            yPercent: 0, 
            duration: .525,
            ease: "power2.out",
        }, "-=.50")
}