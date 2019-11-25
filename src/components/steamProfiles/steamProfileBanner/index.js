import React from "react"
import "./index.scss"

const SteamProfile = ({ name, roles, avatar, desc }) => {
  const getRoles = roles =>
    roles.reduce((accum, curr, index, { length }) => {
      const str = accum + curr
      if (index === length - 1) return str
      if (index === 0 && length === 2) return `${str} and `
      if (index !== length - 2) return str + ", "
      return str + ", and "
    }, "")

  return (
    <div className="steam-profile">
      <div className="avatar">
        {avatar ? <img src={avatar} alt={name} /> : <span>?</span>}
      </div>
      <div className="text">
        <h2>{name}</h2>
        <h3>{getRoles(roles)}</h3>
      </div>
    </div>
  )
}

export default SteamProfile
