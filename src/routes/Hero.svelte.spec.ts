import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Hero from './Hero.svelte';

describe('Hero', () => {
	it('renders the hero section', async () => {
		const { getByText } = render(Hero);

		await expect.element(getByText('Conecta con tus artistas favoritos')).toBeInTheDocument();
	});

	it('renders the logo grid with correct number of cells', async () => {
		const { container } = render(Hero);

		const cells = container.querySelectorAll('.aspect-square');
		expect(cells.length).toBe(36);
	});

	it('has a link to /about', async () => {
		const { container } = render(Hero);

		const link = container.querySelector('a[href="/about"]');
		expect(link).not.toBeNull();
	});

	it('applies fadeIn class to colored cells', async () => {
		const { container } = render(Hero);

		const fadeInCells = container.querySelectorAll('.fadeIn');
		expect(fadeInCells.length).toBe(12);
	});
});
