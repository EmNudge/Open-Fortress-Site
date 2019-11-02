import React from "react"
import "./index.scss"

const LoadingIcon = ({ question, answer }) => {
  const html = { __html: answer.split('\n').join('<br/>') }
  return (
    <div className="faq">
      <div className="question">{question}</div>
      <div className="answer" dangerouslySetInnerHTML={html} />
    </div>
  )
}

export default LoadingIcon
