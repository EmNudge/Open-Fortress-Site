import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import About from '../page-sections/index/about'
import MeetTheMerc from '../page-sections/index/meetTheMerc'
import GameModes from '../page-sections/index/gameModes'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <About />
    <MeetTheMerc />
    <GameModes />
  </Layout>
)

export default IndexPage
