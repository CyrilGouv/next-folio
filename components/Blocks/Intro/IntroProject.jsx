import TextReveal from "@/components/UI/Elements/Text/TextReveal"
import Line from "@/components/UI/Elements/Line/Line"

import styles from "./IntroProject.module.scss"


const DescriptionProject = ({ description }) => {
    return (
        <section className={ styles.description }>
            <div className="container">
                <div className={ styles.description__wrapper }>
                    <Line
                        type="outer"
                    />
                    
                    <p className={ styles.description__text } aria-label={ description }>
                        <TextReveal 
                            text={ description }
                        />
                    </p>
                </div>
            </div>
        </section>
    )
}

export default DescriptionProject