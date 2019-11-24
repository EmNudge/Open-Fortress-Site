import React from "react"
import SteamProfile from "./steamProfileBanner"
import "./index.scss"

const SteamProfiles = ({ credits, categories }) => {
  const getSteamProfile = credit => {
    const [name, info] = credit;
    info.name = name;
    return <SteamProfile key={name} {...info} />
  }

  return (
    <div className="steam-profile-container">
      {[...credits].map(getSteamProfile)}
    </div>
  )
}

export default SteamProfiles
