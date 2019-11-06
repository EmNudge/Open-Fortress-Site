import { graphql, useStaticQuery } from "gatsby"

const useSocialIcons = () => {
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
  
  const icons = data.allSocialIconsJson.edges;
  const files = data.allFile.edges;

  return icons.map(({node}) => {
    const icon = files.find(({node: fileNode}) => fileNode.name === node.icon)
    return { ...node, path: icon.node.publicURL }
  })
}

export default useSocialIcons;