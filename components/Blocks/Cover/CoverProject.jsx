import Image from "next/image"

import styles from "./CoverProject.module.scss"


const CoverProject = ({ image, altText }) => {
    return (
        <section className={ styles.cover }>
            <div className="container">
                <div className={ styles.cover__wrapper }>
                    <Image
                        className={ styles.cover__img } 
                        src={ image }
                        alt={ altText }
                        width={ 1920 } 
                        height={ 800 }    
                    />
                </div>
                
            </div>
        </section>
    )
}

export default CoverProject