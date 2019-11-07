import { useStaticQuery, graphql } from "gatsby"

// gets a single icon url from an array of all SVG icons
const useIcon = name => {
  const icons = useStaticQuery(graphql`
    query {
      allFile(filter: { extension: { eq: "svg" } }) {
        nodes {
          publicURL
          name
        }
      }
    }
  `).allFile.nodes

  return icons.find(icon => icon.name === name).publicURL
}

export default useIcon
