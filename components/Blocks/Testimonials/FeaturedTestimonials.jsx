import TitleSection from "@/components/UI/Elements/Title/TitleSection"
import SliderTestimonials from "@/components/UI/Sliders/SliderTestimonials"

import styles from "./FeaturedTestimonials.module.scss"
import Cta from "@/components/UI/Cta/Cta"


const FeaturedTestimonials = () => {
    return (
        <section className={ `section ${styles.testimonials}` }>
            <div className="container">
                <div className={ styles.testimonials__title }>
                    <TitleSection text="Clients" />
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