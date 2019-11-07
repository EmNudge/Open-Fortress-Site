import React from "react"
import PostPreview from "../postPreview"
import "./index.scss"

const postContainer = ({ posts }) => (
  <div className="post-container">
    <div className="recent">
      <PostPreview {...posts[0]} />
    </div>
    <div className="rest">
      {posts.slice(1).map(post => (
        <PostPreview key={post.slug} {...post} isCompressed={true} />
      ))}
    </div>
  </div>
)

export default postContainer
