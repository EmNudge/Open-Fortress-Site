import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Image from 'gatsby-image'
import "./index.scss"

const PostPreview = ({ author, title, slug, banner, created, isCompressed }) => {
  const link = `/blog/${slug}`;
  const data = useStaticQuery(graphql`
    query {
      file(name: {eq: "calendar"}) {
        publicURL
      }
    }
  `);
  const calendar = data.file.publicURL;
  const postClass = `post-preview ${isCompressed ? "compressed" : ""}`;

  const text = () => (
    <div className="meta">
      <div className="text">
        <div className="date">
          <img src={calendar} alt="calendar"/>
          <span>{created}</span>
        </div>
        <h1>{title}</h1>
        <h4>by {author}</h4>
      </div>
      <div className="btn-container">
        <Link className="read-more" to={link}>Read More</Link>
      </div>
    </div>
  );

  return (
    <div className={postClass}>
      {!isCompressed && text()}
      <div className="banner-container">
        <div className="banner">
          <Image fluid={banner.sharp.fluid} alt={title} />
        </div>
      </div>
      {isCompressed && text()}
    </div>
  )
}

export default PostPreview
