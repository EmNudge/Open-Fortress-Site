import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import useMapThumbs from "../hooks/useMapThumbs"

import ServersContainer from "../components/serversContainer"
import FilterOptions from "../components/filterOptions"
import LoadingIcon from "../components/loadingIcon"

const ServersPage = () => {
  const mapsMap = useMapThumbs()

  const [servers, setServers] = React.useState([])
  const [filters, setFilters] = React.useState({})

  React.useEffect(() => {
    ; (async () => {
      const serversRes = await fetch('/.netlify/functions/get-servers');
      try {
        const servers = await serversRes.json()
        console.log({ servers })
        setServers(servers.filter(server => server))
      } catch (e) {
        console.error(e);
      }
    })();
  }, [])

  const getFilteredServers = servers => {
    if (!filters) return

    const { hasPlayers, input } = filters

    // if the object exists, but its properties are both false, return everything
    if (!hasPlayers && !input) return servers

    return servers.filter(server => {
      // check if the input string is included in the map, name, or ip
      const maybeMap = server.map.includes(input.toLowerCase())
      const maybeName = server.name.toLowerCase().includes(input.toLowerCase())
      const maybeIp = `${server.ip}:${server.port}`.includes(
        input.toLowerCase()
      )
      const inputMatch = maybeMap || maybeName || maybeIp

      // if players are required, ensure it has players
      const playerMatch = (hasPlayers && server.playerNum > 0) || !hasPlayers

      return playerMatch && inputMatch
    })
  }

  const getServersComponent = servers => {
    if (!servers.length) {
      return (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <LoadingIcon />
        </div>
      )
    }

    const filteredServers = getFilteredServers(servers)
    return <ServersContainer
      servers={filteredServers}
      images={mapsMap}
    />
  }

  return (
    <Layout title="Official Servers">
      <SEO title="Servers" />
      <FilterOptions
        onChange={filters => setFilters(filters)}
        filters={filters}
      />
      {getServersComponent(servers)}
    </Layout>
  )
}

export default ServersPage
