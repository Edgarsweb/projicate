import Nav from './Nav'
// import Meta from './Meta'
// import Header from './Header'
import React from 'react'
import styles from '../styles/Home.module.css'
import Footer from "../components/Footer";



function Layout({children}) {
  return (
    <>


  
      



    <Nav />
    <div className={styles.container}>
    {/* <Header /> */}
        <main className={styles.layout}>
            {children}
        </main>      
    </div>
    <Footer />
    
    </>
  )
}

export default Layout
