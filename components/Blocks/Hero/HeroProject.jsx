"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import TitleSingleProject from "@/components/UI/Elements/Title/TitleSingleProject"
import Tags from "@/components/UI/Elements/Tags/Tags"

import styles from "./HeroProject.module.scss"


const HeroProject = ({ title, year, industry, bgColor }) => {

    const pathname = usePathname()

    useEffect(() => {
        document.documentElement.style.setProperty("--darkThemeBgColor", bgColor)
        document.documentElement.style.setProperty("--lightThemeFontColor", bgColor)

        return () => {
            document.documentElement.style.setProperty("--darkThemeBgColor", "#121212")
            document.documentElement.style.setProperty("--lightThemeFontColor", "#09080E")
        }
    }, [pathname])
    
    return (
        <section className={ styles.hero }>
            <div className="container">
                <div className={ styles.hero__wrapper }>
                    <div className={ styles.hero__title }>
                        <div className={ styles.hero__title__tags }>
                            <div className={ styles.hero__title__tags__wrapper }>
                                <Tags
                                    text={ industry }
                                    position="relative"
                                    animations={{ delay: 0.125 }}
                                />
                            </div>
                            <div className={ styles.hero__title__tags__wrapper }>
                                <Tags
                                    text={ `Made in ${year}` }
                                    position="relative"
                                    animations={{ delay: 0.25 }}
                                />
                            </div>
                        </div>
                        <TitleSingleProject title={ title } />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroProject