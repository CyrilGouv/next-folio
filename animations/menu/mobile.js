import gsap from "gsap"


const animationsMobileMenu = (items, lastLine, bottomText) => {

    // Vars
    const lines = []
    const names = []

    Array.from(items).map(item => {
        lines.push(item.children[0])
        names.push(item.children[1].children[0])
    })

    // Settings
    gsap.set(lines, { scaleX: 0 })
    gsap.set(lastLine, { scaleX: 0 })
    gsap.set(names, { yPercent: 100 })
    gsap.set(bottomText, { yPercent: 100 })

    // Gsap timeline
    const tl = gsap.timeline({ delay: .25 })
    tl
        .to(lines, { scaleX: 1, duration: 1.125, ease: "expo.out", stagger: .185 })
        .to(lastLine, { scaleX: 1, duration: 1.125, ease: "expo.out" }, '-=.94')
        .to(names, { yPercent: 0, duration: 1, ease: "power3.out", stagger: .125 }, "-=1.75")
        .to(bottomText, { yPercent: 0, duration: 1, ease: "power3.out" }, "-=1.125")
}

export default animationsMobileMenu