import { useStaticQuery, graphql } from "gatsby"

const useCredits = () => {
  const credits = useStaticQuery(graphql`
    query {
      creditsToml {
        credits {
          desc
          name
          roles
          steamID
        }
      }
    }
  `).creditsToml.credits

  // making the key the name for each object to be used as a HashMap
  const credits2DArr = credits.map(({name, desc, roles, steamID}) => [name, { desc, roles, steamID }])

  return new Map(credits2DArr);
}

export default useCredits
