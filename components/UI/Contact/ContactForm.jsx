"use client"

import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import Inputs from "../Elements/Form/Inputs"
import Selects from "../Elements/Form/Selects"
import Rgpd from "../Elements/Form/Rgpd"
import Submit from "../Elements/Form/Submit"

import styles from "./ContactForm.module.scss"
import opacityAndTransformY from "@/animations/text/opacityAndTransformY"


const ContactForm = () => {

    // Elements
    const formEl = useRef(null)

    // Animations
    useGSAP(() => {
        opacityAndTransformY(formEl.current, formEl.current, 5)
    })

    return (
        <div ref={ formEl } className={ styles.form }>

            <div className={ styles.form__header }>
                <h2 className={ styles.form__header__title }>
                    <span className={ styles.form__header__title__inner }>Fill the form</span>
                </h2>

                <p className={ styles.form__header__infos }>
                    <span className={ styles.form__header__infos__inner }>* Required Fields</span>
                </p>
            </div>

            <div className={ styles.form__content }>
                <Inputs 
                    type="text"
                    title="Nom"
                    name="name"
                    placeholder="Nom complet"
                />
                <Inputs 
                    type="email"
                    title="Email"
                    name="email"
                    placeholder="Adresse E-mail"
                />
                <Selects
                    title="Sujet"
                    name="subject" 
                    placeholder= "Je souhaite..." 
                    options={[
                        {
                            value: "site vitrine",
                            text: "Créer un site vitrine"
                        },
                        {
                            value: "e-commerce",
                            text: "Créer un e-commerce"
                        },
                        {
                            value: "sur-mesure",
                            text: "Créer un site sur-mesure"
                        },
                        {
                            value: "refonte",
                            text: "Refondre un site existant"
                        },
                        {
                            value: "maintenance",
                            text: "Une maintenance de mon site"
                        },
                        {
                            value: "autres",
                            text: "Autres choses"
                        }
                    ]}
                />
                <Selects
                    title="Budget"
                    name="budget" 
                    placeholder= "J'ai un budget" 
                    options={[
                        {
                            value: "Inférieur à 1 000€",
                            text: "Inférieur à 1 000€"
                        },
                        {
                            value: "1 000 - 2 500€",
                            text: "De 1 000 à 2 500€"
                        },
                        {
                            value: "2 500 - 5 000€",
                            text: "De 2 500 à 5 000€"
                        },
                        {
                            value: "5 000 - 10 000€",
                            text: "De 5 000 à 10 000€"
                        },
                        {
                            value: "Plus de 10 000€",
                            text: "De plus de 10 000€"
                        }
                    ]}
                />
                <Inputs 
                    type="textarea"
                    title="Brief"
                    name="brief"
                    placeholder="Dites-moi tout..."
                />
                <Rgpd />
                <Submit text="Envoyer maintenant" />
            </div>
                
        </div>
    )
}

export default ContactForm