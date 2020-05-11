
import players from '../dummy-data/users.json'

const useSteamAPI = async (credits, avatars) => {
	console.log('CALLING API');
	// WE MUST CLONE THIS
	// or else useState won't see a change and it won't rerender children
	// or useEffect will be in a crazy loop. Either way - bad.
	const newCredits = new Map(credits);

	const steamIDsMap = new Map();

	// collecting steamIDs where they are available
	for (const [name, user] of credits) {
		if (!user.steamID) continue;
		steamIDsMap.set(name, user.steamID);
	}

	// if window does not exist in this context, exit. This shouldn't ever occur
	if (typeof window === 'undefined') return credits;

	// getting just the steamIDs and stringifying it into an object
	const steamIDs = [...steamIDsMap.values()];
	const body = JSON.stringify({ steamIDs });

	// const resObj = await window.fetch('/.netlify/functions/get-steam-avatars', {
	// 	method: 'POST',
	// 	headers: {
	// 		Accept: 'application/json',
	// 		'Content-Type': 'application/json'
	// 	},
	// 	body
	// });
	// const res = await resObj.json();

	for (const [name, meta] of newCredits) {
		if (!meta.avatar) continue;

		// file name without extension
		const fileName = meta.avatar.split('.')[0];
		// get the file location if one is specified
		meta.avatar = avatars.get(fileName);
		newCredits.set(name, meta);
	}

	// inserting avatar for every steamID found
	for (const [name, id] of steamIDsMap) {
		const player = players.find((player) => player.steamID === id);
		const newObj = newCredits.get(name);
		// get API profile if steam ID is there
		if (!newObj.avatar) {
			newObj.avatar = player.profileSmall;
			newObj.avatarLarge = player.profileLarge;
		}
		if (!newObj.name) newObj.name = player.name;

		newCredits.set(name, newObj);
	}

	return newCredits;
};

export default useSteamAPI;
