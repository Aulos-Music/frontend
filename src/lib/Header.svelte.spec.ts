import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-svelte";
import Header from "./Header.svelte";

describe("Header", () => {
	it("renders the AULOS title", async () => {
		const { getByTestId } = render(Header, {
			props: { data: { health: "ok" } },
		});

		await expect.element(getByTestId("nav-title")).toBeInTheDocument();
	});

	it("renders navigation buttons", async () => {
		const { getByText } = render(Header, {
			props: { data: { health: "ok" } },
		});

		await expect.element(getByText("Explorar")).toBeInTheDocument();
		await expect.element(getByText("Artistas")).toBeInTheDocument();
		await expect.element(getByText("Destacado")).toBeInTheDocument();
	});

});
