import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostPreview from "../components/postPreview"
import usePosts from "../hooks/usePosts"

const BlogPage = () => {
  const posts = usePosts()

  return (
    <Layout>
      <SEO title="Blog" />
      <h1 style={{marginBottom: 50}}>Posts</h1>
      <div style={{marginBottom: 50}} className="posts">
        {posts.map(post => (
          <PostPreview key={post.slug} {...post} />
        ))}
      </div>
    </Layout>
  )
}

export default BlogPage
