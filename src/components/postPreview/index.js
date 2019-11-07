import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import useIcon from "../../hooks/useIcon"
import "./index.scss"

const PostPreview = ({
  author,
  title,
  slug,
  banner,
  created,
  isCompressed,
}) => {
  const link = `/blog/${slug}`
  const calendar = useIcon("calendar")
  const postClass = `post-preview ${isCompressed ? "compressed" : ""}`

  return (
    <div className={postClass}>
      <div className="meta">
        <div className="text">
          <div className="date">
            <img src={calendar} alt="calendar" />
            <span>{created}</span>
          </div>
          <h1>
            <Link to={link}>{title}</Link>
          </h1>
          {!isCompressed && <h4>by {author}</h4>}
        </div>
        {!isCompressed && (
          <div className="btn-container">
            <Link className="read-more" to={link}>
              Read More
            </Link>
          </div>
        )}
      </div>
      <div className="banner-container">
        <div className="banner">
          <Link to={link}>
            <Image fluid={banner.sharp.fluid} alt={title} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PostPreview
