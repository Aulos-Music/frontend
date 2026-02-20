/**
 * Centralized asset paths. Static files are served from / in SvelteKit,
 * so paths are relative to the static/ folder.
 */
const base = '/assets';

export const assets = {
	patterns: {
		pattern1: `${base}/patterns/Aulos_assets_PATTERN_01.svg`,
		pattern2: `${base}/patterns/Aulos_assets_PATTERN_02.svg`,
		pattern3: `${base}/patterns/Aulos_assets_PATTERN_03.svg`,
		pattern4: `${base}/patterns/Aulos_assets_PATTERN_04.svg`
	},
	logos: {
		horizontal: `${base}/logos/Aulos_assets_LOGO_HORIZONTAL.svg`,
		vertical: `${base}/logos/Aulos_assets_LOGO_Vertical.svg`
	},
	icons: {
		search: `${base}/icons/Aulos_assets_Search_icon.svg`
	},
	isotipo: `${base}/Aulos_assets_ISOTIPO.svg`
} as const;
