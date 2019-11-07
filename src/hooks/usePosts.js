import { graphql, useStaticQuery } from "gatsby"

const usePosts = (sort = { type: "none" }) => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              author
              slug
              title
              created
              banner {
                sharp: childImageSharp {
                  fluid {
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
  `)

  const posts = data.allMdx.edges.map(({ node }) => ({
    ...node.frontmatter,
    excerpt: node.excerpt,
  }))

  if (sort.type === "none") return posts

  const getDateVal = post => +new Date(post.created)

  if (sort.type === "date-descending")
  return posts.sort((a, b) => getDateVal(b) - getDateVal(a))
  if (sort.type === "date-ascending") {
    return posts.sort((a, b) => getDateVal(a) - getDateVal(b))
  }

  throw new Error("INVALID SORT TYPE PROVIDED")
}

export default usePosts
