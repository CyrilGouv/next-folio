import Line from "@/components/UI/Elements/Line/Line"
import ContactInfos from "@/components/UI/Contact/ContactInfos"
import ContactForm from "@/components/UI/Contact/ContactForm"

import styles from "./Contact.module.scss"


const Contact = () => {
    return (
        <section className={ styles.contact }>
            <div className="container">
                <Line />
                
                <div className={ styles.contact__wrapper }>
                    <ContactInfos />
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}

export default Contact