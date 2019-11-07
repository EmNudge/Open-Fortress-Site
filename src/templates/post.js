import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import BlogLayout from "../components/blogLayout"
import { formatDate } from "../utils/date"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        created
      }
      body
    }

    file(name: { eq: "person" }) {
      publicURL
    }
  }
`

const PostTemplate = ({ data }) => {
  const icon = data.file.publicURL
  const { title, author, created } = data.mdx.frontmatter
  const date = formatDate(created, true)

  return (
    <BlogLayout>
      <div className="meta">
        <h1>{title}</h1>
        <h5>
          <img src={icon} alt="person" />
          <span>{author}</span>
          <span>●</span>
          <span>{date}</span>
        </h5>
      </div>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </BlogLayout>
  )
}

export default PostTemplate
