import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


const animationsRevealFooterText = (trigger, letters) => {
    // Settings
    gsap.set(letters, { yPercent: -100 })

    // Animation
    gsap.to(letters, {
        yPercent: 100,
        duration: 1,
        stagger: .05,
        scrollTrigger: {
            trigger: trigger,
            start: "top bottom",
            endTrigger: document.body,
            end: "bottom bottom",
            scrub: true,
        }
    })
}

export default animationsRevealFooterText