import React from "react"
import "./index.scss"

const ServerBanner = ({ onChange, filters }) => {
  const [input, setInput] = React.useState("")
  const [hasPlayers, setHasPlayers] = React.useState(false)
  const [showFilters, setShowFilters] = React.useState(false)

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

  const toggleFilters = () => {
    setShowFilters(!showFilters)
  }

  return (
    <div className="filter-options">
      <button onClick={toggleFilters}>Filters...</button>
      {showFilters &&
        <div className="filter-contents">
          <div className="text-filter-container">
            <label htmlFor="server-filter">Filter Servers</label>
            <input
              type="text"
              id="server-filter"
              placeholder="filter servers"
              value={input}
              onChange={inputChange}
            />
          </div>
          <div className="checkbox-container">
            <label htmlFor="has-players">Hide Empty Servers</label>
            <input
              id="has-players"
              type="checkbox"
              value={hasPlayers}
              onChange={checkboxChange}
            />
          </div>
        </div>
        }
    </div>
  )
}

export default ServerBanner
