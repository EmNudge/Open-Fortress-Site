import React from "react"
import { db, storage } from "../firebase.js"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ServerBanner from "../components/serverBanner"
import FilterOptions from "../components/filterOptions"
import LoadingIcon from "../components/loadingIcon"

const ServersPage = () => {
  const [servers, setServers] = React.useState([])
  const [maps, setMaps] = React.useState(null)
  const [filters, setFilters] = React.useState({})

  React.useEffect(() => {
    ;(async () => {
      const querySnapshot = await db
        .collection("servers")
        .where("playerMax", ">", 0)
        .get()
      const tempServers = []
      querySnapshot.forEach(doc => tempServers.push(doc.data()))

      // get unique list of map names and the url for each image
      const mapNames = [...new Set(tempServers.map(server => server.map))]
      const mapPromises = mapNames.map(fileName =>
        storage.ref(`maps/${fileName}.png`).getDownloadURL()
      )
      const mapUrls = await Promise.all(mapPromises)
      // make into a HashMap for easy retrieval. key = map name, value = map image url
      const mapsMap = new Map(mapNames.map((name, i) => [name, mapUrls[i]]))

      setMaps(mapsMap)
      setServers(tempServers)
    })()
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
    if (!servers.length) return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <LoadingIcon />
      </div>
    );

    const filteredServers = getFilteredServers(servers);
    if (filteredServers.length) return filteredServers.map(server => (
      <ServerBanner
        key={`${server.ip}:${server.port}`}
        {...server}
        path={maps.get(server.map)}
      />
    ));

    return (
      <div style={{ display: "flex", justifyContent: "center", marginTop: 100 }}>
        <h2 style={{ fontWeight: 100 }}>No servers matched your filter.</h2>
      </div>
    )
  }

  return (
    <Layout>
      <SEO title="Servers" />
      <h1>Official Servers</h1>
      <FilterOptions
        onChange={filters => setFilters(filters)}
        filters={filters}
      />
      {getServersComponent(servers)}
    </Layout>
  )
}

export default ServersPage
