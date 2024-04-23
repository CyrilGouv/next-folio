import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


const opacityAndTransformY = (section, text) => {
    gsap.set(text, { autoAlpha: 0, yPercent: 25 })

    if (section) {
        gsap.to(text, {
            autoAlpha: 1, 
            yPercent: 0, 
            duration: .85,
            ease: "power2.out",
            scrollTrigger: {
                trigger: section,
                start: "top bottom",
            }
        })
    } else {
        gsap.to(text, {
            autoAlpha: 1, 
            yPercent: 0, 
            duration: 1,
            delay: .25,
            ease: "power2.out"
        })
    }
}

export default opacityAndTransformY
