import React from "react"
import Img from "gatsby-image"
import useIcons from "../../../hooks/useIcons"
import "./index.scss"

const ServerBanner = ({ ip, port, name, playerNum, playerMax, map, fluid }) => {
  const iconsMap = useIcons(["people", 'monitor']);

  return (
    <div className="server-banner">
      <div className="title">
        <h1>{name}</h1>
        <span>{map}</span>
      </div>
      <div className="meta">
        <span>
          <img src={iconsMap.get("people")} alt="person" />
        </span>
        <span>
          {playerNum} / {playerMax}
        </span>

        <span>
          <img src={iconsMap.get("monitor")} alt="computer" />
        </span>
        <span>
          {ip}:{port}
        </span>
      </div>
      <div className="button">
        <a href={`steam://connect/${ip}:${port}`} alt="connect to server">
          Connect To Server
        </a>
      </div>
      <div className="image">
        <Img fluid={fluid} />
      </div>
    </div>
  )
}

export default ServerBanner
