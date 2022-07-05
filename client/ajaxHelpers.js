// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2206-FTB-ET-WEB-FT-B';
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

export const fetchAllPlayers = async () => {
	try {
		const resp = await fetch(`${APIURL}/players`);
		const result = await resp.json();
		if (result.error) throw result.error;
		return result.data.players;
	} catch (err) {
		console.error(err);
	}
};

export const fetchSinglePlayer = async (playerId) => {
	try {
		const resp = await fetch(`${APIURL}/players/${playerId}`);
		const result = await resp.json();
		console.log(result.data);
		return result.data.player;
	} catch (error) {
		console.log(error);
	}
};

export const addNewPlayer = async (playerObj) => {
	try {
		const response = await fetch(
			'https://fsa-puppy-bowl.herokuapp.com/api/2206-FTB-ET-WEB-FT-B/players',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name: playerObj.name,
					breed: playerObj.breed,
				}),
			}
		);
		const result = await response.json();
		console.log(result);
	} catch (err) {
		console.error(err);
	}
};

export const removePlayer = async (playerId) => {
	console.log(playerId);
	fetch(
		`https://fsa-puppy-bowl.herokuapp.com/api/2206-FTB-ET-WEB-FT-B/players`,
		{
			method: 'DELETE',
		}
	);
	try {
		const response = await fetch(
			`https://fsa-puppy-bowl.herokuapp.com/api/2206-FTB-ET-WEB-FT-B/players/${playerId}`,
			{
				method: 'DELETE',
			}
		);
		const result = await response.json();
		console.log(result);
	} catch (err) {
		console.error(err);
	}
};
