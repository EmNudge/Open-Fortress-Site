import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const logServers = () => {
  window.fetch('/.netlify/functions/get-servers').then(console.log)
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>About</h1>
    <p>Open Fortress is a free and open-source passion project, lovingly crafted by nearly a hundred members of the Team Fortress community with an ideal of fun gameplay as well as maximum customizability.

    The game and website are still under construction, but you are welcome to try it out during development using the SVN Repo via the installer.</p>

    <h2>Meet The Merc</h2>
    <p>A smooth talker, hard hitter and a hell of a fast shooter, the Mercenary is a man raised by television and nurtured by film. Moulded by the dashing gunslingers and suave secret agents of the silver screen, he aspired to be just like them, even from a young age, when he went fist-to-fist with the orphanage's worst bullies and came out on top.</p>
    <p>With an arsenal jam-packed with the finest experimental prototype weapons blood-sport can buy, he's ready to show the world that he really is that twelve on the one-to-ten scale of badass.</p>

    <button onClick={logServers}>Log servers</button>
  </Layout>
)

export default IndexPage
