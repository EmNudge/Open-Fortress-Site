import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import useCredits from "../hooks/useCredits"
import useSteamAPI from "../hooks/useSteamAPI"
import SteamProfiles from "../components/steamProfiles"

const Credits = () => {
  const credits = useCredits()

  let withSteamAvatars
  useSteamAPI(credits).then(newMap => {
    console.log(newMap)
    withSteamAvatars = newMap
  })

  return (
    <Layout>
      <SEO title="Credits" />
      {withSteamAvatars ? (
        <SteamProfiles credits={withSteamAvatars} />
      ) : (
        <SteamProfiles credits={credits} />
      )}
    </Layout>
  )
}

export default Credits
