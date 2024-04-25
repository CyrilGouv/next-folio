import TitleSection from "@/components/UI/Elements/Title/TitleSection"
import SliderTestimonials from "@/components/UI/Sliders/SliderTestimonials"

import styles from "./FeaturedTestimonials.module.scss"


const FeaturedTestimonials = () => {
    return (
        <section className={ `section ${styles.testimonials}` }>
            <div className="container">
                <div className={ styles.testimonials__title }>
                    <TitleSection text="Clients" />
                </div>

                <div className={ styles.testimonials__wrapper }>
                    <SliderTestimonials />
                </div>
            </div>
        </section>
    )
}

export default FeaturedTestimonials