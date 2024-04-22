import gsap from "gsap"

const animationsTitlePage = (firstLine, lastLine) => {
    // Setters
    gsap.set(firstLine, { yPercent: 100 })
    gsap.set(lastLine.children[0], { xPercent: -110 })
    gsap.set(lastLine.children[1], { yPercent: 100 })

    // Timeline
    const tl = gsap.timeline({ delay: .25 })
    tl
        .to(firstLine, { yPercent: 0, duration: 1.125, ease: 'expo.out' })
        .to(lastLine.children[0], { xPercent: 0, duration: 1.125, ease: 'expo.out' }, "-=1")
        .to(lastLine.children[1], { yPercent: 0, duration: 1.125, ease: 'expo.out' }, "-=1.125")
}

export default animationsTitlePage