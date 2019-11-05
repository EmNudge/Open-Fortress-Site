import { graphql, useStaticQuery } from "gatsby"

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              author
              slug
              title
              banner {
                sharp: childImageSharp {
                  fluid( 
                    maxWidth: 100
                    maxHeight: 100
                    duotone: { highlight: "ddbbff", shadow: "#663399" }
                  ) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            excerpt
          }
        }
      }
    }
  `);

  

  return data.allMdx.edges.map(({node}) => ({
    ...node.frontmatter,
    excerpt: node.excerpt,
  }))
}

export default usePosts;
