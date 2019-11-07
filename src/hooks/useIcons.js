import { useStaticQuery, graphql } from "gatsby"

// gets all matching icons with their corresponding URLs and names
const useIcons = names => {
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

  return icons.filter(iconObj => names.includes(iconObj.name))
}

export default useIcons
