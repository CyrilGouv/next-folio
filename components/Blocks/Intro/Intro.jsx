import TitleIntro from "@/components/UI/Elements/Title/TitleIntro"
import IntroContent from "@/components/Blocks/Intro/IntroContent"
import { homepageIntroTitle } from "@/data/content"

import styles from "./Intro.module.scss"


const Intro = ({ page }) => {

    const pageTitle = page === "homepage" ? homepageIntroTitle : ""
    
    return (
        <section className={ styles.intro }>
            <div className="container">
                <TitleIntro text={ pageTitle } />
                <IntroContent page={ page } />
            </div>
        </section>
    )
}

export default Intro