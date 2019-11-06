import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Image from 'gatsby-image'
import "./index.scss"

const PostPreview = ({ author, title, slug, banner, created }) => {
  const link = `/blog/${slug}`;
  const data = useStaticQuery(graphql`
    query {
      file(name: {eq: "calendar"}) {
        publicURL
      }
    }
  `);
  const calendar = data.file.publicURL;

  return (
    <div className="post-preview">
      <div className="meta">
        <div className="text">
          <div className="date">
            <img src={calendar} alt="calendar"/>
            <span>{created}</span>
          </div>
          <h1>{title}</h1>
          <h4>by {author}</h4>
        </div>
        <div>
          <Link className="read-more" to={link}>Read More</Link>
        </div>
      </div>
      <div className="banner-container">
        <div className="banner">
          <Image fluid={banner.sharp.fluid} alt={title} />
        </div>
      </div>
    </div>
  )
}

export default PostPreview
