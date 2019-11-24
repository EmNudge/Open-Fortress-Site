import React from "react"
import SteamProfile from "./steamProfileBanner"
import "./index.scss"

const SteamProfiles = ({ credits, categories }) => {
  const getSteamProfile = credit => {
    const [name, info] = credit;
    info.name = name;
    if (!info.avatar) info.avatar = "https://icon-library.net/images/steam-question-mark-icon/steam-question-mark-icon-29.jpg";
    return <SteamProfile key={name} {...info} />
  }
  
  return (
    <div className="steam-profile-container">
      {[...credits].map(getSteamProfile)}
    </div>
  )
}

export default SteamProfiles
