import TextInfo from "@/components/UI/Elements/Text/TextInfo"
import TextReveal from "@/components/UI/Elements/Text/TextReveal"
import Line from "@/components/UI/Elements/Line/Line"
import Button from "@/components/UI/Elements/Button/Button"

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
                            <TextReveal text="Whether you require help with strategy, web or product design, development, app creation, or innovative tech, we have the expertise and experience to deliver uniquely branded and interactive solutions for your audience." delay={ 0.375 } />
                        </p>

                        <p className="text--regular">
                            <Line />

                            <span className={ styles.intro__content__bottom }>
                                We understand that each client, project, and context is different. We adopt a flexible approach, allowing us to adapt and tailor our services to meet our client's needs.
                            </span>
                        </p>

                        <div className={ styles.intro__content__cta }>
                            <Button text="En savoir plus" path="/a-propos" />
                        </div>
                    </div>
                </div>
            )
    }
}

export default IntroContent