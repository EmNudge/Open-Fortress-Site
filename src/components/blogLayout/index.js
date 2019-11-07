import React from "react"
import PropTypes from "prop-types"

import Header from "../header"
import Footer from "../footer"
import "../layout.scss"
import "./index.scss"

const Layout = ({ children }) => {
  return (
    <div className="main blog-post">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
