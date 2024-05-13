import ButtonWithIcon from "../Elements/Button/ButtonWithIcon"
import Tags from "../Elements/Tags/Tags"
import styles from "./CtaFooter.module.scss"


const CtaFooter = () => {
    return (
        <div className={ styles.cta }>

            <div className={ styles.cta__infos }>
                <p className={ `${styles.cta__infos__body } text--large` }>
                    <Tags 
                        text="Travaillons ensemble"
                        position="relative"
                        isActive={ true }
                        animations={{ delay: 0.25 }}
                    />
                    
                    <span className={ `${styles.cta__infos__body__inner} pt--xSmall` }>
                        Vous avez un projet ou <br />souhaitez collaborer avec moi ?
                    </span>
                </p>

                <div className={ styles.cta__content }>
                    <ButtonWithIcon
                        text="+33 6 25 49 60 99"
                        href="+33625496099"
                        type="phone"
                        className="mr--xSmall"
                    />

                    <ButtonWithIcon
                        text="hello@cyrilgouv.com"
                        href="hello@cyrilgouv.com"
                        type="email"
                    />
                </div>
            </div>
        </div>
    )
}

export default CtaFooter