import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from './footer'
import "./layout.scss"

const Layout = ({ children, title }) => {
  return (
    <div className="main">
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
