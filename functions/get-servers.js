const Gamedig = require('gamedig');

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

// put into a function so we get hoisting.
// I don't want to include the servers in another file (since idk if it'll work) and I don't want to put it on top, obscuring code
function servers() {
	return [
		{
			name: '[US-Central] Deathmatch #1',
			ip: '69.195.157.243:27015'
		},
		{
			name: '[US-Central] Deathmatch #2',
			ip: '69.195.157.243:27016'
		},
		{
			name: '[US-Central] Deathmatch #3',
			ip: '69.195.157.243:27017'
		},
		{
			name: '[US-Central] Deathmatch #4',
			ip: '69.195.157.243:27018'
		},
		{
			name: '[US-Central] Deathmatch + Bots',
			ip: '69.195.157.243:27115'
		},
		{
			name: '[US-Central] Team Deathmatch',
			ip: '69.195.157.243:27023'
		},
		{
			name: '[US-Central] Team Deathmatch + Bots',
			ip: '69.195.157.243:27119'
		},
		{
			name: '[US-Central] All-Class Deathmatch',
			ip: '69.195.157.243:27019'
		},
		{
			name: '[US-Central] All-Class Deathmatch + Bots',
			ip: '69.195.157.243:27116'
		},
		{
			name: '[US-Central] Capture the Flag',
			ip: '69.195.157.243:27027'
		},
		{
			name: '[US-Central] Capture the Flag + Bots',
			ip: '69.195.157.243:27028'
		},
		{
			name: '[US-Central] Gun Game',
			ip: '69.195.157.243:27031'
		},
		{
			name: '[US-Central] Gun Game + Bots',
			ip: '69.195.157.243:27032'
		},
		{
			name: '[US-Central] Infection',
			ip: '69.195.157.243:27024'
		},
		{
			name: '[US-Central] Infection + Bots',
			ip: '69.195.157.243:27120'
		},
		{
			name: '[US-Central] Instagib',
			ip: '69.195.157.243:27020'
		},
		{
			name: '[US-Central] Instagib + Bots',
			ip: '69.195.157.243:27117'
		},
		{
			name: '[US-Central] Randomizer',
			ip: '69.195.157.243:27029'
		},
		{
			name: '[US-Central] Randomizer + Bots',
			ip: '69.195.157.243:27030'
		},
		{
			name: '[US-Central] Rocket Arena',
			ip: '69.195.157.243:27022'
		},
		{
			name: '[US-Central] Rocket Arena + Bots',
			ip: '69.195.157.243:27118'
		},
		{
			name: '[US-Central] Unholy Trinity',
			ip: '69.195.157.243:27021'
		},
		{
			name: '[US-Chicago] Deathmatch',
			ip: '192.223.30.12:27015'
		},
		{
			name: '[US-Chicago] Instagib',
			ip: '192.223.30.12:27215'
		},
		{
			name: '[US-Chicago] Unholy Trinity',
			ip: '192.223.30.12:27115'
		},
		{
			name: '[US-East] Deathmatch',
			ip: '66.229.12.247:27777'
		},
		{
			name: '[US-East] All-Class Deathmatch',
			ip: '66.229.12.247:27965'
		},
		{
			name: '[US-East] Infection',
			ip: '66.229.12.247:27961'
		},
		{
			name: '[US-East] All-Class Infection',
			ip: '66.229.12.247:27884'
		},
		{
			name: '[US-East] Deathmatch Bot Testing',
			ip: '66.229.12.247:25588'
		},
		{
			name: '[US-East] All-Class Deathmatch Bot Testing',
			ip: '66.229.12.247:27016'
		},
		{
			name: '[US-East] Infection Bot Testing',
			ip: '66.229.12.247:27626'
		},
		{
			name: '[US-East] Deathmatch (WIP Maps)',
			ip: '66.229.12.247:27090'
		},
		{
			name: '[US-East] Developer Server',
			ip: '66.229.12.247:22007'
		}
	];
}
