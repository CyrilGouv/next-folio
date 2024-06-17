import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


const animationsFooterScroll = footer => {

    // Responsive animations
    let mm = gsap.matchMedia();

    mm.add("(min-width: 640px)", () => {
        
        gsap.set(footer, { yPercent: -50 })
    
        gsap.to(footer, {
            yPercent: 0,
            ease: "none",
            scrollTrigger: {
                trigger: footer,
                start: "center bottom",
                endTrigger: document.body,
                end: "bottom bottom",
                scrub: true,
                invalidateOnRefresh: true,
                invalidateOnResize: true,
            } 
        })
      
    })
}

export default animationsFooterScroll