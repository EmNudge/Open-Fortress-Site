import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import useFaq from '../hooks/useFaq'
import Layout from "../components/layout"
import SEO from "../components/seo"
import FaqContainer from '../components/faqContainer'

const FaqPage = () => {
  const faqs = useFaq()

  return (
    <Layout>
      <SEO title="F.A.Q." />
      <h1>Frequently Asked Questions</h1>
      <FaqContainer faqs={faqs} />
    </Layout>
  )
}

export default FaqPage
