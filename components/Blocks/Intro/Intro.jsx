import TitleIntro from "@/components/UI/Elements/Title/TitleIntro"
import IntroContent from "@/components/Blocks/Intro/IntroContent"
import { homepageIntroTitle, aboutIntroTitle } from "@/data/content"

import styles from "./Intro.module.scss"


const Intro = ({ page, title = null, content = null }) => {

    const pageTitle = page === "homepage" ? homepageIntroTitle :  page === "about" ? aboutIntroTitle : page === "services" ? title : ""
    
    return (
        <section className={ styles.intro }>
            <div className="container">
                { page !== "about" && (
                    <TitleIntro text={ pageTitle } />
                ) }
                <IntroContent page={ page } content={ content } />
            </div>
        </section>
    )
}

export default Intro