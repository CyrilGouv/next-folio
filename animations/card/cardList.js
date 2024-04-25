import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


const animationsCardList = (trigger, title, text, line) => {
    // Gsap settings
    gsap.set(title.children[0], { yPercent: 100 })
    gsap.set(title.children[1], { scaleX: 0 })
    gsap.set(title.children[2], { yPercent: 100 })
    gsap.set(text, { yPercent: 100 })
    gsap.set(line, { scaleX: 0 })

    // Create gsap timeline && run animation on scroll when itemContentEl is reached
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: trigger,
            start: "top bottom",
            delay: .275
        }
    })

    tl
        .to(title.children[0], { yPercent: 0, duration: 1, ease: "expo.out" })
        .to(title.children[1], { scaleX: 1, duration: .85, ease: "expo.out" }, "-=.7")
        .to(title.children[2], { yPercent: 0, duration: 1, ease: "expo.out" }, "-=.4")
        .to(text, { yPercent: 0, duration: .725, stagger: 0.025, ease: "power3.out" }, "-=.65")
        .to(line, { scaleX: 1, duration: 1.125, ease: "expo.out" }, "-=.5")
}

export default animationsCardList