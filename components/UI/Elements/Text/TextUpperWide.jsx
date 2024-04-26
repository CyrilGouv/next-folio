import Link from "next/link"
import splitByLetters from "@/utils/splitByLetters"

import styles from "./TextUpperWide.module.scss"


const TextUpperWide = ({ text, type }) => {

    const name = splitByLetters(text)

    if(type === "link") {
        return (
            <Link
                href="/contact"
                className={ styles.text }
            >
                { name.map((letter, idx) => (
                    <span
                        key={ idx }
                        className={ styles.text__letter }
                    >
                        { letter }
                    </span>
                )) }
            </Link>
        )
    }
}

export default TextUpperWide