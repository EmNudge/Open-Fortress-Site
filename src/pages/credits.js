import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import useCredits from "../hooks/useCredits"
import SteamProfiles from '../components/steamProfiles'

const NotFoundPage = () => {
  const credits = useCredits();
  console.log(credits);

  const steamIDs = [76561198128576895,76561198006395451,76561198080213691,76561198147116054]
  fetch('/.netlify/functions/get-steam-avatars', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({steamIDs}),
  }).then(res => {
    return res.json()
  }).then(console.log)

  return (
    <Layout>
      <SEO title="Credits" />
      <SteamProfiles credits={credits} />
    </Layout>
  )
}

export default NotFoundPage
