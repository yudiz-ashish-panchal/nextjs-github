import React from 'react'
import { Container } from 'react-bootstrap'
import styles from "../styles/Footer.module.scss"
function Footer() {
  return (
    <>
     <div className={styles.footer}>
       <Container>
        <footer >
            DEVELOPED BY ASHISH PANCHAL
        </footer>
       </Container>
     </div> 
    </>
  )
}

export default Footer
