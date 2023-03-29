import React from 'react'
import { Container } from 'react-bootstrap'
import styles from "../styles/Header.module.scss"
function Header() {
  return (
    <>  
    <div className={styles.navbarDiv}>
        <Container>
          <nav className={styles.navbarDiv_navbar}>
            <div>
            <h3>Ashish Panchal</h3>  
            </div>
            <div>
            <h3>Logout</h3>
            </div>
          </nav>
        </Container>
    </div>
    </>
  )
}

export default Header
