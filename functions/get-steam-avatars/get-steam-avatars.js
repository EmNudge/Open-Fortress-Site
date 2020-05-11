const fetch = require("node-fetch")

exports.handler = async event => {
  const { steamIDs } = JSON.parse(event.body)
  const { STEAM_API_KEY } = process.env

  const url = "http://api.steampowered.com"
  const path = "/ISteamUser/GetPlayerSummaries/v0002/"
  const params = [`key=${STEAM_API_KEY}`, `steamids=${steamIDs.join(",")}`]

  const resStr = await fetch(`${url}${path}?${params.join("&")}`)
  const res = await resStr.json()

  const players = res.response.players.map(player => ({
    name: player.personaname,
    steamID: player.steamid,
    state: player.personastate,
    profileSmall: player.avatar,
    profileLarge: player.avatarfull,
    profileMedium: player.avatarmedium,
    customUrl: player.profileurl,
  }))

  return {
    statusCode: 200,
    body: JSON.stringify({players}),
  }
}
