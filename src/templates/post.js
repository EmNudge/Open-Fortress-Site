import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from "../components/blogLayout"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug }}) {
      frontmatter {
        title 
        author
      }
      body
    }
  }
`

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <h1>{post.frontmatter.title}</h1>
    <h5>by {post.frontmatter.author}</h5>
    <MDXRenderer>{post.body}</MDXRenderer>
  </Layout>
)

export default PostTemplate