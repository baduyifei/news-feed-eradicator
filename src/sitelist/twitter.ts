import { regionId, siteId, type Site } from "../types/sitelist";

export const site: Site = {
			id: siteId('twitter'),
			title: 'Twitter/X',
			hosts: ['x.com'],
			paths: ['/home', '/'],
			regions: [
				{
					id: regionId('home-timeline'),
					title: '主信息流',
					type: 'hide',
					paths: 'inherit',
					selectors: [
						'div[data-testid="primaryColumn"] > div > div > section[role="region"]',
						'div[aria-label="Home timeline"] > div > section[role="region"]', // Fallback but only works if X is set to English
					],
					inject: {
						mode: 'overlay',
					}
				},
				{
					id: regionId('explore-posts'),
					title: '探索页「为你推荐」',
					type: 'remove',
					paths: ['/explore'],
					selectors: [
					'div[data-testid="primaryColumn"] div[data-testid="cellInnerDiv"]:has(article[data-testid="tweet"])',
					],
				},
			]
		}

export default site;
