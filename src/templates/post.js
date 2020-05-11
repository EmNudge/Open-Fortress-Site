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
    <BlogLayout title={title} icon={icon} author={author} date={date} >
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </BlogLayout>
  )
}

export default PostTemplate
