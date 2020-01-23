const Gamedig = require('gamedig');

const servers = [
	{ ip: '66.229.12.247', port: 25569 },
	{ ip: '192.223.30.12', port: 27215 },
	{ ip: '66.229.12.247', port: 25565 },
	{ ip: '66.229.12.247', port: 27018 },
	{ ip: '66.229.12.247', port: 27017 },
	{ ip: '66.229.12.247', port: 27016 },
	{ ip: '66.229.12.247', port: 27888 },
	{ ip: '66.229.12.247', port: 27884 },
	{ ip: '66.229.12.247', port: 27777 },
	{ ip: '66.229.12.247', port: 27965 },
	{ ip: '66.229.12.247', port: 27961 },
	{ ip: '66.229.12.247', port: 27964 },
	{ ip: '66.229.12.247', port: 27626 },
	{ ip: '66.229.12.247', port: 42487 }
];

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
	const serverPromises = servers.map(({ ip, port }) =>
        getServer({ host: ip, port }).catch((e) => console.log('was not able to get server: ', e))
	);
	
	const serversData = await Promise.all(serverPromises);

	return {
		statusCode: 200,
		body: JSON.stringify(serversData),
	} 
}
