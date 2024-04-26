import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


const animationsRevealFooterText = (startTrigger, letters) => {
    // Settings
    gsap.set(letters, { yPercent: -100 })

    // Animation
    gsap.to(letters, {
        yPercent: 100,
        duration: 1,
        stagger: .05,
        scrollTrigger: {
            trigger: startTrigger,
            start: "top bottom",
            endTrigger: document.body,
            end: "bottom bottom",
            scrub: true,
            invalidateOnRefresh: true,
            invalidateOnResize: true,
        }
    })
}

export default animationsRevealFooterText