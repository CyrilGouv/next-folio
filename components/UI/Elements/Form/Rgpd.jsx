import styles from "./Rgpd.module.scss"


const Rgpd = () => {
    return (
        <div className={ styles.rgpd }>
            <p className={ `${styles.rgpd__text} text--regular` }>En soumettant ce formulaire, j'accepte que les informations saisies soient exploitées dans le cadre de la demande et de la relation commerciale qui peut en découler.</p>
        </div>
    )
}

export default Rgpd