import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from './footer'
import "./layout.scss"

import BG from '../images/bgs/briefcase.png'

const Layout = ({ children, title, page }) => {
  const style = {
    backgroundImage: page === 'index' ? `url(${BG})` : '', 
    backgroundSize: 'contain',
    backgroundAttachment: 'local',
    backgroundRepeat: 'no-repeat'
  }

  return (
    <div className="main" style={style}>
      <Header />
      {title && <h1>{title}</h1>}
      <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
