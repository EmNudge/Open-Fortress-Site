import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import useCredits from "../hooks/useCredits"
import useAvatars from '../hooks/useAvatars'
import getWithMissingData from "../utils/getWithMissingData"
import SteamProfiles from "../components/steamProfiles"

const Credits = () => {
  const [credits, setCredits] = React.useState(useCredits())
  const avatars = useAvatars();
  
  React.useEffect(() => {
    (async () => {
      const newCredits = await getWithMissingData(credits, avatars);
      setCredits(newCredits);
    })()
  }, [])

  return (
    <Layout title="Contributors">
      <SEO title="Credits" />
      <SteamProfiles credits={credits} />
    </Layout>
  )
}

export default Credits
