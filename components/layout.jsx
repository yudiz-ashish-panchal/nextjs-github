import React from 'react'
import Footer from './footer'
import Header from './header'

function Layout({children}) {
  return (
    <>
        <Header/>
        <div>
            {children}
        </div>
        <Footer/> 
    </>
  )
}

export default Layout
