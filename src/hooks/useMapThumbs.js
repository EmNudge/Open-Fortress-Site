import { useStaticQuery, graphql } from "gatsby"

const useMapThumbs = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "maps" } }) {
        nodes {
          name
          childImageSharp {
            fluid(maxWidth: 512) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  // turn into 2 dimensional array to convert to Map
  const maps = data.allFile.nodes.map(node => [node.name, node.childImageSharp.fluid])

  return new Map(maps)
}

export default useMapThumbs
