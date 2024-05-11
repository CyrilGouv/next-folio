import TitleSection from "@/components/UI/Elements/Title/TitleSection"
import SliderTestimonials from "@/components/UI/Sliders/SliderTestimonials"
import Cta from "@/components/UI/Cta/Cta"
import TextInfo from "@/components/UI/Elements/Text/TextInfo"
import Tags from "@/components/UI/Elements/Tags/Tags"

import styles from "./FeaturedTestimonials.module.scss"


const FeaturedTestimonials = () => {
    return (
        <section className={ `section ${styles.testimonials}` }>
            <div className="container">
                <div className={ styles.testimonials__title }>
                    <TitleSection text="Clients" />

                    <div className={ styles.testimonials__title__more }>
                        <div className={ styles.testimonials__title__more__wrapper }>
                            <Tags 
                                text="+23 clients" 
                                position="relative" 
                                animations={{ delay: .25 }} 
                            />
                            <TextInfo 
                                body="Ils sont entrepreneurs, indépendants, e-commerçants..." 
                                full={ true } 
                                className="pt--xSmall"
                            />
                        </div>
                    </div>
                </div>

                <div className={ styles.testimonials__wrapper }>
                    <SliderTestimonials />
                    <Cta
                        ctaText="We understand that each client, project, and context is different. We adopt a flexible approach, allowing us to adapt and tailor our services to meet our client's needs."
                        btnText="Tous les témoignages"
                        btnLink="/temoignages"
                    />
                </div>
            </div>
        </section>
    )
}

export default FeaturedTestimonials