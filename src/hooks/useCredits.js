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
          avatar
        }
      }
    }
  `).creditsToml.credits

  // making the key the name for each object to be used as a HashMap
  const credits2DArr = credits.map(({ name, desc, roles, steamID, avatar }) => [name, { desc, roles, steamID, avatar }])

  return new Map(credits2DArr);
}

export default useCredits
