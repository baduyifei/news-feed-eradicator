import { regionId, siteId, type Site } from "../types/sitelist";

export const site: Site = {
	id: siteId('linkedin'),
	title: 'LinkedIn',
	hosts: ['www.linkedin.com'],
	paths: ['/', '/feed', '/feed/'],
	regions: [
		{
			id: regionId('main-feed'),
			title: '主信息流',
			type: 'hide',
			paths: 'inherit',
			selectors: ["main > div.relative > .scaffold-finite-scroll", "div[componentkey^='container-update-list_mainFeed']"],
			inject: {
				mode: 'before',
			}
		},
		{
			id: regionId('news-sidebar'),
			title: '新闻侧边栏',
			type: 'remove',
			paths: '*',
			selectors: ['#feed-news-module', 'div:has(> div > div[data-view-name="news-module"])'],
		}
	]
}

export default site;
