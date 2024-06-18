import Image from "next/image"

import styles from "./CoverProject.module.scss"


const CoverProject = ({ image, altText, className = null }) => {
    
    return (
        <section className={ styles.cover }>
            <div className="container">
                <div className={ `${styles.cover__wrapper} ${className ? className : ""}` }>
                    <Image
                        className={ styles.cover__img } 
                        src={ image }
                        alt={ altText }
                        fill
                        sizes="100vw" 
                    />
                </div>
            </div>
        </section>
    )
}

export default CoverProject