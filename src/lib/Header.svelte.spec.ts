import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Header from './Header.svelte';

describe('Header', () => {
	it('renders the AULOS title', async () => {
		const { getByText } = render(Header, {
			props: { data: { health: 'ok' } }
		});

		await expect.element(getByText('AULOS')).toBeInTheDocument();
	});

	it('renders navigation buttons', async () => {
		const { getByText } = render(Header, {
			props: { data: { health: 'ok' } }
		});

		await expect.element(getByText('Explorar')).toBeInTheDocument();
		await expect.element(getByText('Artistas')).toBeInTheDocument();
		await expect.element(getByText('Destacado')).toBeInTheDocument();
	});

	it('shows operational status when health is ok', async () => {
		const { getByText, container } = render(Header, {
			props: { data: { health: 'ok' } }
		});

		await expect.element(getByText('Operational')).toBeInTheDocument();

		const greenDot = container.querySelector('.bg-emerald-500');
		expect(greenDot).not.toBeNull();
	});

	it('shows offline status when health is not ok', async () => {
		const { getByText, container } = render(Header, {
			props: { data: { health: 'error' } }
		});

		await expect.element(getByText('Offline')).toBeInTheDocument();

		const redDot = container.querySelector('.bg-red-500');
		expect(redDot).not.toBeNull();
	});

	it('renders System label', async () => {
		const { getByText } = render(Header, {
			props: { data: { health: 'ok' } }
		});

		await expect.element(getByText('System:')).toBeInTheDocument();
	});
});
