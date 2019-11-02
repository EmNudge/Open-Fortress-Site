import { Link } from "gatsby"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import MainLogo from "../../images/svg/full logo.svg"
import "./index.scss"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const data = useStaticQuery(graphql`
    query {
      allSocialIconsJson {
        edges {
          node {
            icon
            name
            url
          }
        }
      }
      allFile(filter: {extension: {eq: "svg"}}) {
        edges {
          node {
            name
            publicURL
          }
        }
      }
    }
  `);

  const icons = ((queryData) => {
    const icons = queryData.allSocialIconsJson.edges;
    const files = queryData.allFile.edges;

    return icons.map(({node}) => {
      const icon = files.find(({node: fileNode}) => fileNode.name === node.icon)
      return { ...node, path: icon.node.publicURL }
    })
  })(data);

  return (
    <footer>
      <div className="contents">
        <div className="metadata">
          <Link to="/">
            <img src={MainLogo} alt="main site logo" height="50px" />
          </Link>
          <span>Site developed by <a href="https://github.com/EmNudge">EmNudge</a></span>
          <span>
            Copyright © {currentYear === 2019 ? 2019 : `2019 - ${currentYear}`}
          </span>
        </div>
        <div className="directory">
          <h2>Directory</h2>
          <div className="routes">
            <Link to="/">Home</Link>
            <Link to="/servers">Servers</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/faq">F.A.Q.</Link>
            <Link to="/credits">Credits</Link>
          </div>
        </div>
        <div className="social-icons">
          <h2>Social</h2>
          <div className="icons">
            {icons.map(icon => (
              <a href={icon.url} key={icon.name}>
                <img src={icon.path} alt={icon.name} />
                <span>{icon.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
