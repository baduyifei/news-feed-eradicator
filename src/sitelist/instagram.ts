import { regionId, siteId, type Site } from "../types/sitelist";

export const site: Site = {
	id: siteId('instagram'),
	title: 'Instagram',
	hosts: ['www.instagram.com'],
	paths: ['/'],
	regions: [
		{
			id: regionId('main-feed'),
			title: '主信息流',
			type: 'hide',
			paths: 'inherit',
			selectors: ['main > :nth-child(1) > div[style]'],
			inject: {
				mode: 'overlay',
				overlayZIndex: 0,
			}
		},
		{
			id: regionId('home-stories'),
			title: '快拍',
			type: 'remove',
			paths: 'inherit',
			selectors: ['section > main div.xw7yly9 > div.xmnaoh6']
		},
		{
			id: regionId('suggested-for-you'),
			title: '为你推荐',
			type: 'remove',
			paths: 'inherit',
			selectors: ['div:has(> div > a[href="/explore/people/"])']
		}
	]
}

export default site;
