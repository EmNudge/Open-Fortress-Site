const Gamedig = require('gamedig');
const servers = require('./servers.json')

const getServer = async ({ host, port }) => {
	const serverData = await Gamedig.query({
		host,
		port,
		type: 'hl2dm'
	});

	const { name, map, maxplayers, players } = serverData;

	return {
		ip: host,
		port,
		name,
		map,
		playerMax: maxplayers,
		playerNum: players.length,
		players
	};
};

exports.handler = async () => {
	const serverPromises = servers().map((server) => {
		const [host, port] = server.ip.split(':');
		return getServer({ host, port }).catch((e) => console.log('was not able to get server: ', e));
	});

	const serversData = await Promise.all(serverPromises);

	return {
		statusCode: 200,
		body: JSON.stringify(serversData)
	};
};