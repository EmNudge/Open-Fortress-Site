import React from "react"
import { Link } from "gatsby"
import Image from 'gatsby-image'
import "./index.scss"

const PostPreview = ({ author, title, slug, bgImage, date, banner }) => {
  const link = `/blog/${slug}`;

  return (
    <div className="post-preview">
      <span>{date}</span>
      <h1>{title}</h1>
      <h4>by {author}</h4>
      <Link className="read-more" to={link}>Read More</Link>
      <div className="container" style={{ width: 100, height: 100 }}>
        <Image fluid={banner.sharp.fluid} alt={title} />
      </div>

      <img src={bgImage} />
    </div>
  )
}

export default PostPreview
