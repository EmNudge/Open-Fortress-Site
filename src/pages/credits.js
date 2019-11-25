import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import useCredits from "../hooks/useCredits"
import getWithAvatars from "../utils/getWithAvatars"
import SteamProfiles from "../components/steamProfiles"

const Credits = () => {
  const noAvatarCredits = useCredits();
  const [credits, setCredits] = React.useState(noAvatarCredits)

  React.useEffect(() => {
    (async () => {
      const newCredits = await getWithAvatars(noAvatarCredits);
      setCredits(newCredits);
    })()
  }, [noAvatarCredits])

  return (
    <Layout>
      <SEO title="Credits" />
      <SteamProfiles credits={credits} />
    </Layout>
  )
}

export default Credits
