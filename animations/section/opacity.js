import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


const animationsSectionOverlay = (section, overlay) => {

    // Responsive animations
    let mm = gsap.matchMedia();

    mm.add("(min-width: 640px)", () => {
        gsap.to(
            overlay,
            {
                opacity: .5,
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

export default animationsSectionOverlay