import React from "react"
import SteamProfile from "./steamProfileBanner"
import "./index.scss"

const SteamProfiles = ({ credits, categories }) => {
  return (
    <div className="steam-profile-container">
      {credits.map(user => (
        <SteamProfile {...user} />
      ))}
    </div>
  )
}

export default SteamProfiles
