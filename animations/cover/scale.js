import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


const animationsCoverScale = (windowHeight, sectionTrigger, elementToScale) => {

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: sectionTrigger,
            start: "top " + windowHeight * .9,
            end: "top top",
            scrub: true,
            invalidateOnRefresh: true,
        }
    })

    gsap.from(
        elementToScale, 
        { 
            scale: 1.125,
            ease: "none",
            scrollTrigger: {
                trigger: sectionTrigger,
                start: "top bottom",
                end: "top top",
                scrub: true,
                invalidateOnRefresh: true,
            }
        }
    )
}

export default animationsCoverScale