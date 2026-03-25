import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import HeaderButton from './HeaderButton.svelte';

describe('HeaderButton', () => {
	it('renders the button text', async () => {
		const { getByText } = render(HeaderButton, {
			props: { text: 'Test Button', linkTo: '/test' }
		});

		await expect.element(getByText('Test Button')).toBeInTheDocument();
	});

	it('renders a link with correct href', async () => {
		const { container } = render(HeaderButton, {
			props: { text: 'Explore', linkTo: '/explore' }
		});

		const link = container.querySelector('a[href="/explore"]');
		expect(link).not.toBeNull();
		expect(link?.textContent).toBe('Explore');
	});

	it('renders different text and links correctly', async () => {
		const { container, getByText } = render(HeaderButton, {
			props: { text: 'Artists', linkTo: '/artists' }
		});

		await expect.element(getByText('Artists')).toBeInTheDocument();

		const link = container.querySelector('a[href="/artists"]');
		expect(link).not.toBeNull();
	});
});
