import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import useCredits from "../hooks/useCredits"
import SteamProfiles from '../components/steamProfiles'

const NotFoundPage = () => {
  const credits = useCredits();
  console.log(credits);

  return (
    <Layout>
      <SEO title="Credits" />
      <SteamProfiles credits={credits} />
    </Layout>
  )
}

export default NotFoundPage
