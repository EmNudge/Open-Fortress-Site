import React from "react"
import "./index.scss"

const ServerBanner = ({ ip, port, name, playerNum, playerMax, map, path }) => (
  <div className="server-banner">
    <h1>{name}</h1>
    <span>{ip}:{port}</span>
    <div className="meta">
      <span>{playerNum} / {playerMax}</span>
      <span>{map}</span>
    </div>
    <a href={`steam://connect/${ip}:${port}`} alt="connect to server">Connect To Server</a>
    <img src={path} alt={map} />
  </div>
)

export default ServerBanner
