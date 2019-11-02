import React from "react"
import "./index.scss"

const ServerBanner = ({ onChange, filters }) => {
  const [input, setInput] = React.useState("")
  const [hasPlayers, setHasPlayers] = React.useState(false)

  React.useEffect(() => {
    setInput(filters.input || "")
    setHasPlayers(filters.hasPlayers || false)
  }, [])

  const inputChange = e => {
    setInput(e.target.value)
    onChange({ input: e.target.value, hasPlayers })
  }

  const checkboxChange = e => {
    setHasPlayers(e.target.checked)
    onChange({ input, hasPlayers: e.target.checked })
  }

  return (
    <div className="filter-options">
      <div className="text-filter-container">
        <label htmlFor="map-filter">Filter Maps</label>
        <input
          type="text"
          id="map-filter"
          placeholder="filter maps"
          value={input}
          onChange={inputChange}
        />
      </div>
      <div className="checkbox-container">
        <label htmlFor="has-players">Non-empty servers</label>
        <input
          id="has-players"
          type="checkbox"
          value={hasPlayers}
          onChange={checkboxChange}
        />
      </div>
    </div>
  )
}

export default ServerBanner
