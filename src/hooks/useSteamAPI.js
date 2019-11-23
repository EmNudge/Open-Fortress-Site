const useSteamAPI = async credits => {
  const steamIDsMap = new Map()

  // collecting steamIDs where they are available
  for (const [name, user] of credits) {
    if (!user.steamID) continue
    steamIDsMap.set(name, user.steamID)
  }

  // if window does not exist in this context, exit. This shouldn't ever occur
  if (typeof window === "undefined") return credits

  // getting just the steamIDs and stringifying it into an object
  const steamIDs = [...steamIDsMap.values()]
  const body = JSON.stringify({ steamIDs })

  const resObj = await window.fetch("/.netlify/functions/get-steam-avatars", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body,
  })
  const res = await resObj.json()

  // inserting avatar for every steamID found
  for (const [name, id] of steamIDsMap) {
    const player = res.players.find(player => player.steamID === id)
    const newObj = {...credits.get(name), avatar: player.profileLarge}
    credits.set(name, newObj)
  }

  return credits;
}

export default useSteamAPI
