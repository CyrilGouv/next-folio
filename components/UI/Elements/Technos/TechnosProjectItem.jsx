import Line from "../Line/Line"
import TextReveal from "../Text/TextReveal"
import styles from "./TechnosProjectItem.module.scss"


function TechnosProjectItem({ label, techno }) {
    return (
        <li className={ styles.item }>
            <div className={ styles.item__content }>
                <h3 className={ `${styles.item__label} text--large` }>
                    <TextReveal text={ label } />
                </h3>
                <p className={ `${styles.item__text} text--large` }>
                    <TextReveal text={ techno } />
                </p>
            </div>
            <Line type="inner" />
        </li>
    )
}

export default TechnosProjectItem