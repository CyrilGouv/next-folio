import styles from "./LegalesContent.module.scss"


const LegalesContent = ({ body }) => {

    switch(body) {
        case "informations":
            return (
                <div className={ styles.content }>
                    <p className={ `${styles.content__text} text--large` }>
                        En vertu de l’Article 6 de la Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique, il est précisé dans cet article l’identité des différents intervenants dans le cadre de sa réalisation et de son suivi.
                    </p>
                    <p className={ `${styles.content__text} text--large` }>
                        <span className="text--opacity">
                            Éditeur du site
                        </span>
                    </p>
                    <p className={ `${styles.content__text} text--large` }>
                        Le site cyrilgouv.com est édité par : Cyril Gouverneur ayant son siège social à l’adresse suivante : 62 rue diamant, 40600 Biscarrosse.
                    </p>
                    <p className={ `${styles.content__text} text--large` }>
                        Adresse e-mail de contact : hello@cyrilgouv.com
                    </p>
                    <p className={ `${styles.content__text} text--large` }>
                        <span className="text--opacity">
                            Création et réalisation
                        </span>
                    </p>
                    <p className={ `${styles.content__text} text--large` }>
                        Le site cyrilgouv.com a été désigné et développé par Cyril Gouverneur.
                    </p>
                    <p className={ `${styles.content__text} text--large` }>
                        <span className="text--opacity">
                            Hébergeur du site
                        </span>
                    </p>
                    <p className={ `${styles.content__text} text--large` }>
                        Le site cyrilgouv.com est hébergé par : Netlify dont le siège est situé à l’adresse suivante :
                        44 Montgomery St STE 300, San Francisco, CA 94104 United States
                    </p>
                </div>
            ) 

        case "confidentialite":
            return (
                <div className={ styles.content }>
                    <p class={ `${styles.content__text} text--large` }>
                        Conformément aux dispositions de l’article 5 du Règlement européen 2016/679, la collecte et le traitement des données des utilisateurs du site respectent les principes suivants
                    </p>
                    <p class={ `${styles.content__text} text--large` }>
                        Licéité, loyauté et transparence : les données ne peuvent être collectées et traitées qu’avec le consentement de l’utilisateur propriétaire des données. A chaque fois que des données à caractère personnel seront collectées, il sera indiqué à l’utilisateur que ses données sont collectées, et pour quelles raisons ses données sont collectées.
                    </p>
                    <p class={ `${styles.content__text} text--large` }>
                        Finalités limitées : la collecte et le traitement des données sont exécutés pour répondre à un ou plusieurs objectifs déterminés dans les présentes mentions légales.
                    </p>
                    <p class={ `${styles.content__text} text--large` }>
                        Minimisation de la collecte et du traitement des données : seules les données nécessaires à la bonne exécution des objectifs poursuivis par le site sont collectées.
                    </p>
                    <p class={ `${styles.content__text} text--large` }>
                        Conservation des données réduites dans le temps : les données sont conservées pour une durée limitée, dont l’utilisateur est informé. Si la durée de conservation ne peut être communiquée à l’utilisateur.
                    </p>
                    <p class={ `${styles.content__text} text--large` }>
                        Intégrité et confidentialité des données collectées et traitées : le responsable du traitement des données s’engage à garantir l’intégrité et la confidentialité des données collectées.
                    </p>
                </div>
            )
    }
    
}

export default LegalesContent