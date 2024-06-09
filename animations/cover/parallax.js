import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


const animationsCoverParallax = (windowHeight, sectionTrigger, firstEl, secondEl, thirdEl) => {

    // Responsive animations
    let mm = gsap.matchMedia();

    

    mm.add("(max-width: 1023px)", () => {
        // Timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionTrigger,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                invalidateOnRefresh: true,
            }
        })

        tl
            .to(firstEl, { y: windowHeight * 2, ease: "none" }, 0)
            .to(secondEl, { y: - windowHeight * .75, ease: "none" }, 0)
            .to(thirdEl, { y: windowHeight * 2, ease: "none" }, 0)
      
    })

    mm.add("(min-width: 1024px)", () => {
        // Timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionTrigger,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                invalidateOnRefresh: true,
            }
        })

        tl
            .to(firstEl, { y: windowHeight * 3.25, ease: "none" }, 0)
            .to(secondEl, { y: - windowHeight * 1.025, ease: "none" }, 0)
            .to(thirdEl, { y: windowHeight * 3.25, ease: "none" }, 0)
      
    })

}

export default animationsCoverParallax