import { client } from '$lib/api';
import { gql } from 'graphql-request';
import type { Artist } from '$lib/interfaces/Artist.interface';

const mockArtists: Artist[] = [
	{
		id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
		name: 'Plini',
		description: 'Australian instrumental progressive rock guitarist and composer.'
	},
	{
		id: 'b2c3d4e5-f6a7-8901-bcde-f12345678901',
		name: 'David Maxim Micic',
		description: 'Serbian guitarist and composer known for progressive metal and jazz fusion.'
	},
	{
		id: 'c3d4e5f6-a7b8-9012-cdef-123456789012',
		name: 'Polyphia',
		description: 'Instrumental progressive rock band from Texas with trap and R&B influences.'
	},
	{
		id: 'd4e5f6a7-b8c9-0123-defa-234567890123',
		name: 'Intervals',
		description: 'Canadian instrumental progressive metal project led by Aaron Marshall.'
	}
];

export const load = async () => {
	const query = gql`
		query GetHealth {
			health
			artists {
				id
				name
				description
			}
		}
	`;

	try {
		const data = await client.request<{ health: string; artists: Artist[] }>(query);
		return {
			health: data.health,
			artists: data.artists
		};
	} catch (error) {
		console.error('Failed to fetch data:', error);
		return {
			health: 'offline',
			// TODO: DELETE THIS IN FAVOR OF PROPER ERRORS
			artists: mockArtists
		};
	}
};
