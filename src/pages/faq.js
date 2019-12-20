import React from "react"

import useFaq from '../hooks/useFaq'
import Layout from "../components/layout"
import SEO from "../components/seo"
import FaqContainer from '../components/faqContainer'

const FaqPage = () => {
  const faqs = useFaq()

  return (
    <Layout title="Frequently Asked Questions">
      <SEO title="F.A.Q." />
      <FaqContainer faqs={faqs} />
    </Layout>
  )
}

export default FaqPage
