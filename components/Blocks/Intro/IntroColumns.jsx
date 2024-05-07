import Image from "next/image"
import Line from "@/components/UI/Elements/Line/Line"
import TitleIntro from "@/components/UI/Elements/Title/TitleIntro"
import { aboutIntroTitle, aboutImage } from "@/data/content"

import styles from "./IntroColumns.module.scss"


const IntroColumns = ({ layout }) => {
  return (
    <section className={ styles.intro }>
      <div className="container">
        <div className={ styles.intro__line }>
          <Line type="inner" />
        </div>

        <div className={ styles.intro__wrapper }>
          <div className={ styles.intro__content }>
            <TitleIntro 
              text={ aboutIntroTitle } 
              options={{
                pinned: false,
                className: "text--large"
              }} 
            />
          </div>

          <div className={ styles.intro__img }>
              <Image
                className={ styles.intro__img__inner }
                src={ aboutImage.img }
                alt={ aboutImage.alt }
                fill
                priority={ false }
                sizes="47%"
              />
          </div>
        </div>

        <Line />
      </div>
    </section>
  )
}

export default IntroColumns