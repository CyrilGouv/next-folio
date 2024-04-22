import gsap from "gsap"

const animationsCoverReveal = revealEl => {
    gsap.to(revealEl, { scaleY: 0, duration: 1.25, ease: "expo.out" })
}

export default animationsCoverReveal