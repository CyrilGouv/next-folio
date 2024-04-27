import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger" 

gsap.registerPlugin(ScrollTrigger)

const animationsTitleArrow = element => {
    
    gsap.to(element.children[0], {
        scrollTrigger: {
            trigger: document.body,
            start: "top top",
            endTrigger: element,
            end: "bottom top",
            scrub: true,
        },
        rotate: 45,
    })
    
}

export default animationsTitleArrow