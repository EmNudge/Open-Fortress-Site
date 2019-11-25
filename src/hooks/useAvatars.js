import { useStaticQuery, graphql } from "gatsby"

const useAvatars = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {relativeDirectory: {eq: "avatars"}}) {
        nodes {
          name
          childImageSharp {
            fluid(maxHeight: 40) {
              src
            }
          }
        }
      }
    }
  `)

  // turn into 2 dimensional array to convert to Map
  const avatars = data.allFile.nodes.map(node => [node.name, node.childImageSharp.fluid.src])

  return new Map(avatars)
}

export default useAvatars
