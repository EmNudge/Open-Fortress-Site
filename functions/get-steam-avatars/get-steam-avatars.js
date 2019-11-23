const fetch = require("node-fetch")

exports.handler = async (event, context, callback) => {
  const { steamIDs } = JSON.parse(event.body)

  const url = "http://api.steampowered.com"
  const path = "/ISteamUser/GetPlayerSummaries/v0002/"
  const params = [process.env.STEAM_API_KEY, steamIDs.join(",")]

  const resStr = await fetch(`${url}${path}?${params.join("&")}`)
  const res = await resStr.json();

  const players = res.response.players.map(player => ({
    name: player.personaname,
    steamID: player.steamid,
    state: player.personastate,
    profileLarge: player.avatarfull,
    profileMedium: player.avatarmedium,
  }))

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(players),
  })
}
