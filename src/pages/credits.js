import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import useCredits from "../hooks/useCredits"
import getWithAvatars from "../utils/getWithAvatars"
import SteamProfiles from "../components/steamProfiles"

const Credits = () => {
  const [credits, setCredits] = React.useState(useCredits())

  React.useEffect(() => {
    (async () => {
      const newCredits = await getWithAvatars(credits);
      setCredits(newCredits);
    })()
  }, [])

  return (
    <Layout>
      <SEO title="Credits" />
      <SteamProfiles credits={credits} />
    </Layout>
  )
}

export default Credits
