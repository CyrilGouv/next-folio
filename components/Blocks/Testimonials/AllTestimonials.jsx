import CardTestimonial from "@/components/UI/Cards/CardTestimonial"
import Line from "@/components/UI/Elements/Line/Line"
import { testimonials } from "@/data/testimonials"

import styles from "./AllTestimonials.module.scss"


const AllTestimonials = () => {
    return (
        <section className={ styles.testimonials }>
            <div className="container">
                <Line type="outer" />
                
                <ul className={ styles.testimonials__wrapper }>
                    { testimonials.map(({ id, name, avatar, company, text }) => (
                        <CardTestimonial
                            key={ id }
                            count={ id }
                            name={ name }
                            avatar={ avatar }
                            company={ company }
                            body={ text }
                        />
                    )) }
                </ul>
            </div>
        </section>
    )
}

export default AllTestimonials