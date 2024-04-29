import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


const opacityAndTransformY = (section, elements) => {
    gsap.set(elements, { autoAlpha: 0, yPercent: 25 })

    gsap.to(elements, {
        autoAlpha: 1, 
        yPercent: 0, 
        duration: .75,
        stagger: 0.125,
        ease: "power2.out",
        scrollTrigger: {
            trigger: section,
            start: "top bottom",
        }
    })
    
}

export default opacityAndTransformY
