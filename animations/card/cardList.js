import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


const animationsCardList = (trigger, title, text, line) => {
    // Gsap settings
    gsap.set(title.children[0], { autoAlpha: 0, yPercent: 100 })
    gsap.set(title.children[1], { yPercent: 100 })
    gsap.set(text, { autoAlpha: 0, yPercent: 10 })
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
        .to(title.children[0], { yPercent: 0, autoAlpha: .35, duration: 1.5, ease: "expo.out" })
        .to(title.children[1], { yPercent: 0, duration: 1, ease: "expo.out" }, "-=.95")
        .to(text, { autoAlpha: .5, yPercent: 0, duration: .5, ease: "power1.out" }, "-=.6")
        .to(line, { scaleX: 1, duration: 1.125, ease: "expo.out" }, "-=.65")
}

export default animationsCardList