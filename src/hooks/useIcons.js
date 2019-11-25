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

  const filteredIcons = icons.filter(iconObj => names.includes(iconObj.name))
  const iconMap = new Map(filteredIcons.map(iconObj => [iconObj.name, iconObj.publicURL]))
  
  return iconMap
}

export default useIcons
