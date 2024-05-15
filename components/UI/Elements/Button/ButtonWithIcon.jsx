import styles from "./ButtonWithIcon.module.scss"


const ButtonWithIcon = ({ text, href, type, className = null }) => {

    switch(type) {
        case "phone":
            return (
                <a 
                    className={ `${styles.button} ${className ? className : ""}` } 
                    href={ `tel:${href}` }
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <span className={ styles.button__text }>
                        <span className={ styles.button__text__inner }>{ text }</span>
                    </span>
                
                    <span className={ styles.button__icon }>
                        {/* Phone icon by Tom Walsh from Noun Project */}
                        <svg version="1.1" viewBox="0 0 84 90" xmlns="http://www.w3.org/2000/svg">
                            <g fill="none" fillRule="evenodd">
                            <g fill="inherit" fillRule="nonzero">
                            <path d="m82.1 70.1-0.5-1c-1.4-3.3-18.6-8.3-20-8.4l-1.1 0.1c-2.1 0.4-4.4 2.3-8.9 6.2-0.9 0.8-2.1 1-3.2 0.4-5.9-3.3-13.1-9.9-16.7-13.9-3.9-4.3-8.6-11.4-10.8-17.1-0.4-1.1 0-2.3 0.8-3.1 5.1-4.6 7.3-6.8 7.5-9.2 0.1-1.4-2.9-19.1-6-20.8l-0.9-0.6c-2-1.3-5-3.2-8.3-2.5-0.8 0.2-1.6 0.5-2.3 0.9-2.2 1.4-7.7 5.2-10.2 10.1-1.5 3.1-2.2 31.2 18.8 54.9 20.8 23.5 46.5 24.5 50.3 23.7h0.1l0.3-0.1c5.2-1.9 9.6-6.8 11.3-8.9 3.1-3.7 1-8.2-0.2-10.7z"/>
                            </g>
                            </g>
                        </svg>
                    </span>
                </a>
            )
        case "email":
            return (
                <a 
                    className={ `${styles.button} ${className ? className : ""}` } 
                    href={ `mailto:${href}` }
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <span className={ styles.button__text }>
                        <span className={ styles.button__text__inner }>{ text }</span>
                    </span>
        
                    <span className={ styles.button__icon }>
                        {/* Email icon by Syauqi Rusydi from Noun Project */}
                        <svg version="1.1" viewBox="0 0 88 64" xmlns="http://www.w3.org/2000/svg">
                            <g fill="none" fillRule="evenodd">
                            <g fill="inherit" fillRule="nonzero">
                            <path d="m13 7-6.9062-5.5625c1.1211-0.45312 2.3203-0.6875 3.5312-0.6875h68.75c1.2109 0 2.4102 0.23438 3.5312 0.6875l-6.8438 5.5625-31.062 25-31-25zm73.594-1.3125-5.0938 4.1562-33.656 27.062c-2.2461 1.7305-5.3789 1.7305-7.625 0l-33.719-27.062-5.0938-4.1562c-0.74609 1.3594-1.1445 2.8867-1.1562 4.4375v43.75c0 5.1758 4.1992 9.375 9.375 9.375h68.75c5.1758 0 9.375-4.1992 9.375-9.375v-43.75c-0.011719-1.5508-0.41016-3.0781-1.1562-4.4375z"/>
                            </g>
                            </g>
                        </svg>
                    </span>
                </a>
            )
        default:
            return null
    }

    
}

export default ButtonWithIcon