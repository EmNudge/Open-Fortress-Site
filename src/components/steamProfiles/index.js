import React from "react"
import SteamProfile from "./steamProfileBanner"
import "./index.scss"

const SteamProfiles = ({ credits, categories }) => {

  return (
    <div className="steam-profile-container">
      {[...credits].map(([name, info]) => (
        <SteamProfile key={name} name={name} {...info} />
      ))}
    </div>
  )
}

export default SteamProfiles
