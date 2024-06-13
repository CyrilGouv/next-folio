import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


const revealByWords = (words, delay = 0.25) => {
    gsap.set(words, { yPercent: 100 })
    
    gsap.to(words, {
        yPercent: 0,
        delay: delay,
        duration: .625,
        ease: "power3.out",
        stagger: .025,
    })
}

export default revealByWords
