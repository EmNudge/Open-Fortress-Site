import React from "react"
import FAQ from "./faq"
import "./index.scss"

const FaqContainer = ({ faqs }) => (
  <div className="faq-container">
    {faqs.map(faq => <FAQ key={faq.question} {...faq}/>)}
  </div>
)

export default FaqContainer
