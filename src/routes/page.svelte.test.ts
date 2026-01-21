import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Page from './+page.svelte';

describe('/+page.svelte', () => {
	it('should render h1', async () => {
		const { getByText } = render(Page, {
			props: {
				data: {
					health: 'ok',
					artists: []
				}
			}
		});

		await expect.element(getByText('AULOS')).toBeInTheDocument();
	});
});
