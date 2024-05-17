"use client"

import { useGSAP } from "@gsap/react"
import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import Inputs from "../Elements/Form/Inputs"
import Selects from "../Elements/Form/Selects"
import Rgpd from "../Elements/Form/Rgpd"
import Submit from "../Elements/Form/Submit"
import opacityAndTransformY from "@/animations/text/opacityAndTransformY"

import styles from "./ContactForm.module.scss"


const ContactForm = () => {

    // Router
    const router = useRouter()

    // Elements
    const formEl = useRef(null)

    // Fields state
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [budget, setBudget] = useState("")
    const [brief, setBrief] = useState("")
    const [honeypot, setHoneypot] = useState("")

    // Errors state
    const [fullnameError, setFullnameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [subjectError, setSubjectError] = useState("")
    const [budgetError, setBudgetError] = useState("")
    const [briefError, setBriefError] = useState("")

    // Loading state
    const [isLoading, setIsLoading] = useState(false)
    

    // Animations
    useGSAP(() => {
        opacityAndTransformY(formEl.current, formEl.current, 5)
    })

    useEffect(() => {
        if(fullname !== "") {
            setFullnameError("")
        }

        if(email !== "") {
            setEmailError("")
        }

        if(subject !== "") {
            setSubjectError("")
        }

        if(budget !== "") {
            setBudgetError("")
        }

        if(brief !== "") {
            setBriefError("")
        }

    }, [fullname, email, subject, budget, brief])


    // Check fields && submit form
    const handleSubmit = (e) => {
        e.preventDefault()

        resetError()

        if (!fullname) {
            setFullnameError("Merci d'indiquer votre nom complet !")
        }

        if (!email) {
            setEmailError("Merci d'indiquer un email valide !")
        }

        if (!subject) {
            setSubjectError("Merci d'indiquer la raison de votre prise de contact !")
        }

        if (!budget) {
            setBudgetError("Indiquez-moi votre budget !")
        }

        if (!brief) {
            setBriefError("Expliquez-moi de quelle manière je pourrais vous aider !")
        }

        if (fullname && email && subject && budget && brief && !honeypot) {
            setIsLoading(true)
            let data = {
                fullname,
                email,
                subject,
                budget,
                brief,
            }

            postContactForm(data)

        } else if(fullname && email && subject && budget && brief && honeypot) {
            setIsLoading(true)
            console.log("Try harder");
            setIsLoading(false)
            router.push("/contact/confirmation")
            
        }
    }

    // Post to /api/contact
    const postContactForm = async (data) => {
        const res = await fetch('/api/contact', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        if (res.status === 200) {
            setIsLoading(false)
            const form = await res.json()

            if(form.message === "sent") {
                router.push("contact/confirmation")
            } else if(form.message === "error") {
                router.push("contact/erreur")
            }
            
        } else {
            setIsLoading(false)
            router.push("contact/erreur")
        }
    }

    // Reset All error
    const resetError = () => {
        setFullnameError("")
        setEmailError("")
        setSubjectError("")
        setBudgetError("")
        setBriefError("")
    }

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

            <form onSubmit={ handleSubmit } className={ styles.form__content }>
                <Inputs 
                    type="text"
                    title="Nom"
                    name="name"
                    placeholder="Nom complet"
                    handleValue={ setFullname }
                    errorMessage={ fullnameError }
                />
                <Inputs 
                    type="email"
                    title="Email"
                    name="email"
                    placeholder="Adresse E-mail"
                    handleValue={ setEmail }
                    errorMessage={ emailError }
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
                    handleValue={ setSubject }
                    errorMessage={ subjectError }
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
                    handleValue={ setBudget }
                    errorMessage={ budgetError }
                />
                <Inputs 
                    type="textarea"
                    title="Brief"
                    name="brief"
                    placeholder="Dites-moi tout..."
                    handleValue={ setBrief }
                    errorMessage={ briefError }
                />
                <Inputs 
                    type="number"
                    title="Age"
                    name="age"
                    placeholder="42"
                    className="inputs__honeypot"
                    handleValue={ setHoneypot }
                    required={ false }
                />
                <Rgpd />
                <Submit text="Envoyer maintenant" isLoading={ isLoading } />
            </form>
                
        </div>
    )
}

export default ContactForm