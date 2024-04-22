import TitlePage from "@/components/UI/Elements/Title/TitlePage"

import styles from "./Hero.module.scss"


const Hero = ({ page }) => {
  return (
    <section className={ styles.hero }>
        <div className="container">
            <div className={ styles.hero__wrapper }>
                <div className={ styles.hero__title }>
                    <TitlePage page={ page } />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero