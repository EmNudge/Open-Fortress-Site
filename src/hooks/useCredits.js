import { useStaticQuery, graphql } from "gatsby"

const useCredits = () => {
  const credits = useStaticQuery(graphql`
    query {
      creditsToml {
        credits {
          desc
          name
          roles
        }
      }
    }
  `).creditsToml.credits

  return credits;
}

export default useCredits
