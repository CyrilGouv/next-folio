import TextInfo from "@/components/UI/Elements/Text/TextInfo"
import TextReveal from "@/components/UI/Elements/Text/TextReveal"

import styles from "./IntroContent.module.scss"


const IntroContent = ({ page }) => {
    
    switch(page) {
        case "homepage":
            return (
                <div className={ styles.intro__content }>
                    <TextInfo body="(à propos)" />
                    <div className={ styles.intro__content__wrapper }>
                        <p className={ styles.intro__content__text }>
                            <TextReveal text="Whether you require help with strategy, web or product design, development, app creation, or innovative tech, we have the expertise and experience to deliver uniquely branded and interactive solutions for your audience." />
                        </p>
                        <p className={ styles.intro__content__text }>
                            <TextReveal text="Whether you require help with strategy, web or product design, development, app creation, or innovative tech, we have the expertise and experience to deliver uniquely branded and interactive solutions for your audience." />
                        </p>
                    </div>
                </div>
            )
    }
}

export default IntroContent