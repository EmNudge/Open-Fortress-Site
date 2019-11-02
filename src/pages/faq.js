import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FAQ from '../components/faq'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allFaqsToml {
        edges {
          node {
            faq {
              answer
              question
            }
          }
        }
      }
    }
  `)

  const faqs = data.allFaqsToml.edges[0].node.faq;

  return (
    <Layout>
      <SEO title="F.A.Q." />
      <h1>Frequently Asked Questions</h1>
      {faqs.map(faq => <FAQ key={faq.question} {...faq}/>)}
    </Layout>
  )
}

export default IndexPage
