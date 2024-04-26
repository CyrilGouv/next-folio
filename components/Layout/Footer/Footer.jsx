import MenuFooter from "@/components/UI/Elements/Menu/MenuFooter"

import styles from "./Footer.module.scss"


const Footer = () => {
    return (
        <footer className={ styles.footer }>
            <div className="container">
                <div className={ styles.footer__top }>
                    <MenuFooter />
                </div>
            </div>
        </footer>
    )
}

export default Footer