import React from 'react'
import Header from './../general/Header'
import HeaderSecondary from './../general/HeaderSecondary'
import Footer from './../general/Footer'
import Navbar from './../general/navbar/Navbar'

const ExternalLayout = ({ children, isHeaderPrincipal=true }) => {
  return(
    <>
      {
        isHeaderPrincipal ?
        <Header /> :
        <HeaderSecondary />
      }
      {children}
      <Footer />
      <Navbar />
    </>
  )
}

export default ExternalLayout