import TextReveal from "@/components/UI/Elements/Text/TextReveal"
import styles from "./LegalesContent.module.scss"


const LegalesContent = ({ body }) => {

    switch(body) {
        case "informations":
            return (
                <div className={ styles.content }>
                    <p className={ `${styles.content__text} text--large` } aria-label="En vertu de l’Article 6 de la Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique, il est précisé dans cet article l’identité des différents intervenants dans le cadre de sa réalisation et de son suivi.">
                        <TextReveal text="En vertu de l’Article 6 de la Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique, il est précisé dans cet article l’identité des différents intervenants dans le cadre de sa réalisation et de son suivi." />
                    </p>
                    <p className={ `${styles.content__text} ${styles.content__title} text--large text--opacity` } aria-label="Éditeur du site"> 
                        <TextReveal text="Éditeur du site" />
                    </p>
                    <p className={ `${styles.content__text} text--large` } aria-label="Le site cyrilgouv.com est édité par : Cyril Gouverneur ayant son siège social à l’adresse suivante : 62 rue diamant, 40600 Biscarrosse.">
                        <TextReveal text="Le site cyrilgouv.com est édité par : Cyril Gouverneur ayant son siège social à l’adresse suivante : 62 rue diamant, 40600 Biscarrosse." />
                    </p>
                    <p className={ `${styles.content__text} text--large` } aria-label="Adresse e-mail de contact : hello@cyrilgouv.com">
                        <TextReveal text="Adresse e-mail de contact : hello@cyrilgouv.com" />
                    </p>
                    <p className={ `${styles.content__text} text--large` } aria-label="Siret : 842 855 025 00016">
                        <TextReveal text="Siret : 842 855 025 00016" />
                    </p>
                    <p className={ `${styles.content__text} ${styles.content__title} text--large text--opacity` } aria-label="Création et réalisation">
                        <TextReveal text="Création et réalisation" />
                    </p>
                    <p className={ `${styles.content__text} text--large` } aria-label="Le site cyrilgouv.com a été désigné et développé par Cyril Gouverneur.">
                        <TextReveal text="Le site cyrilgouv.com a été désigné et développé par Cyril Gouverneur." />
                    </p>
                    <p className={ `${styles.content__text} ${styles.content__title} text--large text--opacity` } aria-label="Hébergeur du site">
                        <TextReveal text="Hébergeur du site" />
                    </p>
                    <p className={ `${styles.content__text} text--large` } aria-label="Le site cyrilgouv.com est hébergé par : Vercel, Inc dont le siège social est situé à l’adresse suivante : 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.">
                        <TextReveal text="Le site cyrilgouv.com est hébergé par : Vercel, Inc dont le siège social est situé à l’adresse suivante : 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis." />
                    </p>
                </div>
            ) 

        case "Conditions d’Utilisation":
            return (
                <div className={ styles.content }>
                    <p className={ `${styles.content__text} text--large` } aria-label="Ce site (https://cyrilgouv.com) est accessible en différents langages web (HTML, HTML5, JavaScript, CSS, etc.). Pour un meilleur confort d’utilisation et un graphisme plus agréable, nous vous recommandons d’utiliser des navigateurs modernes comme Google Chrome, Opera, Brave, Mozilla Firefox, Safari, etc...">
                        <TextReveal text="Ce site (https://cyrilgouv.com) est accessible en différents langages web (HTML, HTML5, JavaScript, CSS, etc.). Pour un meilleur confort d’utilisation et un graphisme plus agréable, nous vous recommandons d’utiliser des navigateurs modernes comme Google Chrome, Opera, Brave, Mozilla Firefox, Safari, etc..." />
                    </p>
                    <p className={ `${styles.content__text} text--large` } aria-label="Nous mettons tout en œuvre pour fournir des informations fiables et régulièrement mises à jour. Toutefois, des erreurs ou omissions peuvent survenir. Si vous constatez une anomalie, merci de nous le signaler par email à hello@cyrilgouv.com.">
                        <TextReveal text="Nous mettons tout en œuvre pour fournir des informations fiables et régulièrement mises à jour. Toutefois, des erreurs ou omissions peuvent survenir. Si vous constatez une anomalie, merci de nous le signaler par email à hello@cyrilgouv.com." />
                    </p>
                </div>
            )

        case "Absence de Cookies":
            return (
                <div className={ styles.content }>
                    <p className={ `${styles.content__text} text--large` } aria-label="Le site https://cyrilgouv.com n’utilise pas de cookies. Aucun fichier n’est enregistré sur votre ordinateur lors de votre navigation sur ce site.">
                        <TextReveal text="Le site https://cyrilgouv.com n’utilise pas de cookies. Aucun fichier n’est enregistré sur votre ordinateur lors de votre navigation sur ce site." />
                    </p>
                </div>
            )

        case "Liens Hypertextes":
            return (
                <div className={ styles.content }>
                    <p className={ `${styles.content__text} text--large` } aria-label="Le site internet cyrilgouv.com peut contenir des liens vers d’autres ressources disponibles sur Internet. Cependant, nous ne contrôlons pas ces sites externes et ne pouvons être tenus responsables de leur contenu ou de leur fonctionnement.">
                        <TextReveal text="Le site internet cyrilgouv.com peut contenir des liens vers d’autres ressources disponibles sur Internet. Cependant, nous ne contrôlons pas ces sites externes et ne pouvons être tenus responsables de leur contenu ou de leur fonctionnement." />
                    </p>
                </div>
            )

        case "Données Personnelles":
            return (
                <div className={ styles.content }>
                    <p className={ `${styles.content__text} text--large` } aria-label="Le site cyrilgouv.com ne collecte aucune donnée personnelle lors de votre navigation. Toutefois, si vous choisissez de nous contacter via notre formulaire de contact, les informations que vous communiquez seront uniquement utilisées pour répondre à votre demande et ne seront pas partagées avec des tiers.">
                        <TextReveal text="Le site cyrilgouv.com ne collecte aucune donnée personnelle lors de votre navigation. Toutefois, si vous choisissez de nous contacter via notre formulaire de contact, les informations que vous communiquez seront uniquement utilisées pour répondre à votre demande et ne seront pas partagées avec des tiers." />
                    </p>
                    <p className={ `${styles.content__text} text--large` } aria-label="Conformément à la loi Informatique et Libertés du 6 janvier 1978 modifiée, vous disposez d’un droit d’accès, de rectification et de suppression de vos données. Pour l’exercer, veuillez nous contacter à hello@cyrilgouv.com.">
                        <TextReveal text="Conformément à la loi Informatique et Libertés du 6 janvier 1978 modifiée, vous disposez d’un droit d’accès, de rectification et de suppression de vos données. Pour l’exercer, veuillez nous contacter à hello@cyrilgouv.com." />
                    </p>
                </div>
            )

        case "Litiges":
            return (
                <div className={ styles.content }>
                    <p className={ `${styles.content__text} text--large` } aria-label="Les présentes conditions d’utilisation sont régies par la loi française. En cas de litige, la compétence exclusive est attribuée aux tribunaux du ressort du siège social de l’éditeur du site.">
                        <TextReveal text="Les présentes conditions d’utilisation sont régies par la loi française. En cas de litige, la compétence exclusive est attribuée aux tribunaux du ressort du siège social de l’éditeur du site." />
                    </p>
                </div>
            )
    }
    
}

export default LegalesContent