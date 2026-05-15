import { regionId, siteId, type Site } from "../types/sitelist";

export const site: Site = {
	id: siteId('facebook'),
	title: 'Facebook',
	hosts: ['www.facebook.com', 'web.facebook.com'],
	paths: ['/'],
	regions: [
		{
			id: regionId('main-feed'),
			title: '主信息流',
			type: 'hide',
			paths: 'inherit',
			selectors: ['div.x1hc1fzr.x1unhpq9.x6o7n8i'],
			inject: {
				mode: 'before',
			}
		},
		{
			id: regionId('home-stories'),
			title: '快拍',
			type: 'remove',
			paths: 'inherit',
			selectors: ['div.x193iq5w.xgmub6v.x1ceravr.x1v0nzow']
		},
		{
			id: regionId('groups-feed'),
			title: '小组信息流',
			type: 'remove',
			default: false,
			paths: ['/groups/feed/'],
			selectors: ['div[role="feed"]'],
			inject: {
				mode: 'before',
			}
		}
	]
}

export default site;
