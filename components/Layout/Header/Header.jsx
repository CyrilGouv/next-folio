import Navigation from "@/components/Layout/Navigation/Navigation"
import Logo from "@/components/UI/Elements/Logo/Logo"

import styles from "./Header.module.scss"


const Header = () => {
  return (
    <header className={ styles.header }>
      <div className="container">
        <div className={ styles.header__wrapper }>
          <div className={ styles.header__logo }>
            <Logo />
          </div>
          
          <div className={ styles.header__navigation }>
            <Navigation />
          </div>
        </div>    
      </div>
    </header>
  )
}

export default Header