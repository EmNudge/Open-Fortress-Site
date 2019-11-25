import React from "react"
import SteamProfile from "./steamProfileBanner"
import "./index.scss"

const SteamProfiles = ({ credits, categories }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(-1);

  const handleClick = index => {
    if (selectedIndex === index) {
      setSelectedIndex(-1);
      return;
    }
    setSelectedIndex(index)
  }

  const getSteamProfile = (credit, index) => {
    const [name, info] = credit;
    info.name = name;
    info.isSelected = selectedIndex === index

    return <SteamProfile key={name} {...info} onClick={() => handleClick(index)} />
  }

  return (
    <div className="steam-profile-container">
      {[...credits].map(getSteamProfile)}
    </div>
  )
}

export default SteamProfiles
