import React from "react"
import Img from "gatsby-image"
import useIcons from "../../hooks/useIcons"
import "./index.scss"

const ServerBanner = ({ ip, port, name, playerNum, playerMax, map, fluid }) => {
  console.log(useIcons(["people", 'monitor']))
  const [people, monitor] = useIcons(["people", 'monitor']);

  return (
    <div className="server-banner">
      <h1>{name}</h1>
      <span>{map}</span>
      <div className="meta">
        <span>
          <img src={people.publicURL} alt="person"/>
        </span>
        <span>
          {playerNum} / {playerMax}
        </span>

        <span>
          <img src={monitor.publicURL} alt="computer"/>
        </span>
        <span>
          {ip}:{port}
        </span>
      </div>
      <a href={`steam://connect/${ip}:${port}`} alt="connect to server">
        Connect To Server
      </a>
      <div className="image">
        <Img fluid={fluid} />
      </div>
    </div>
  )
}

export default ServerBanner
