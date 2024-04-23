import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


const revealByWords = (section, words, delay = 0.25) => {
    gsap.set(words, { yPercent: 100 })
    
    if (section) {
        gsap.to(words, {
            yPercent: 0,
            delay: delay,
            duration: .625,
            ease: "power3.out",
            stagger: .025,
            scrollTrigger: {
                trigger: section,
                start: "center bottom",
                invalidateOnRefresh: true,
            }
        })
    } else {
        gsap.to(words, {
            yPercent: -100,
            delay: delay,
            duration: .85,
            ease: "power3.out",
            stagger: .025,
        })
    }
}

export default revealByWords
