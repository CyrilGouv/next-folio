import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


const animationsCoverParallax = (windowHeight, sectionTrigger, firstEl, secondEl, thirdEl) => {

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: sectionTrigger,
            start: "top " + windowHeight * .9,
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
        }
    })

    tl
        .to(firstEl, { y: windowHeight * 2.85 }, 0)
        .to(secondEl, { y: - windowHeight * 1.25 }, 0)
        .to(thirdEl, { y: windowHeight * 2.85 }, 0)
}

export default animationsCoverParallax