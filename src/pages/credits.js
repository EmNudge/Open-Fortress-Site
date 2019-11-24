import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import useCredits from "../hooks/useCredits"
import useSteamAPI from "../hooks/useSteamAPI"
import SteamProfiles from "../components/steamProfiles"

const Credits = () => {
  const [credits, setCredits] = React.useState(useCredits())

  React.useEffect(() => {
    useSteamAPI(credits).then(setCredits)
  }, [])

  return (
    <Layout>
      <SEO title="Credits" />
      <SteamProfiles credits={credits} />
    </Layout>
  )
}

export default Credits
