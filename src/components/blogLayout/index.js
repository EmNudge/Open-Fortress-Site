import React from "react"
import PropTypes from "prop-types"

import Header from "../header"
import Footer from "../footer"
import "../layout.scss"
import "./index.scss"

import { graphql } from "gatsby"

export const query = graphql`
  query {
    file(name: { eq: "person" }) {
      publicURL
    }
  }
`

const Layout = ({ children, title, icon, author, date }) => {
  return (
    <div className="main blog-post">
      <Header />
      <main>
        <div className="meta">
          <h1>{title}</h1>
          <h5>
            <img src={icon} alt="person" />
            <span>{author}</span>
            <span>●</span>
            <span>{date}</span>
          </h5>
        </div>
        <div className="contents">{children}</div>
      </main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
