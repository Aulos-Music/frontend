import { client } from '$lib/api';
import { gql } from 'graphql-request';

export const load = async () => {
	const query = gql`
    query GetDashboard {
      health
      artists {
        id
        name
        description
      }
    }
  `;

	try {
		const data = await client.request<{ health: string; artists: any[] }>(query);
		return {
			health: data.health,
			artists: data.artists
		};
	} catch (error) {
		console.error("Failed to fetch data:", error);
		return {
			health: "offline",
			artists: []
		};
	}
};
