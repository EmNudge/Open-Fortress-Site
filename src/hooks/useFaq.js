import { useStaticQuery, graphql } from "gatsby"

const useIcon = name => {
  const data = useStaticQuery(graphql`
    query {
      allFaqsToml {
        edges {
          node {
            faq {
              answer
              question
            }
          }
        }
      }
    }
  `)

  return  data.allFaqsToml.edges[0].node.faq;
}

export default useIcon
