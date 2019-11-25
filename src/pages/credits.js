import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import useCredits from "../hooks/useCredits"
import getWithMissingData from "../utils/getWithMissingData"
import SteamProfiles from "../components/steamProfiles"

const Credits = () => {
  const [credits, setCredits] = React.useState(useCredits())

  React.useEffect(() => {
    (async () => {
      const newCredits = await getWithMissingData(credits);
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
