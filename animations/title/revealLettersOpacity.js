import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger" 
import dimensionWindow from "@/utils/dimensionWindow"

gsap.registerPlugin(ScrollTrigger)


const revealLettersOpacity = (section, letters, pinned = false) => {
    if (pinned) {
        gsap.to(letters, {
            scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: () => `+=${dimensionWindow()}`,
                scrub: true,
                pin: pinned,
                invalidateOnRefresh: true,
            },
            autoAlpha: 1,
            ease: 'none',
            stagger: 0.1
        })
    } else {
        gsap.set(letters, { autoAlpha: 0.2 })
        
        gsap.to(letters, {
            scrollTrigger: {
                trigger: section,
                start: "top center",
                end: "center center",
                scrub: true,
                invalidateOnRefresh: true,
            },
            autoAlpha: 1,
            ease: "none",
            stagger: 0.1
        })
    }
}

export default revealLettersOpacity
