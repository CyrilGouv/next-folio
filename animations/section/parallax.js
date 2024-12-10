import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


const animationsSectionParallax = (section) => {

    // Responsive animations
    let mm = gsap.matchMedia();

    mm.add("(min-width: 640px)", () => {
        gsap.to(
            section,
            {
                y: (i, el) => gsap.getProperty(el, "--padding"),
                ease: "linear",
                scrollTrigger: {
                    trigger: section,
                    start: "bottom bottom",
                    end: "bottom top",
                    scrub: true,
                }
            }
        )
    })
}

export default animationsSectionParallax