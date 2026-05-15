import { regionId, siteId, type Site } from "../types/sitelist";

export const site: Site = {
			id: siteId('bluesky'),
			title: 'Bluesky',
			hosts: ['bsky.app'],
			paths: ['/'],
			regions: [
				{
					id: regionId('main'),
					title: '主信息流',
					type: 'hide',
					paths: 'inherit',
					selectors: ['[data-testid="customFeedPage-feed"] > div > div:nth-child(2) > div'],
					inject: {
						mode: 'overlay',
						overlayZIndex: 99999999
					}
				},
			]
		}

export default site;
