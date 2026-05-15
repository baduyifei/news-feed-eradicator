import { regionId, siteId, type Site } from "../types/sitelist";

const site: Site = {
	id: siteId('reddit'),
	title: "Reddit",
	hosts: ['www.reddit.com', 'old.reddit.com'],
	paths: ['/', '/new/', '/hot/', '/rising/', '/controversial/', '/top/'],
	popular: true,
	regions: [
		{
			id: regionId('feed'),
			title: '信息流',
			selectors: ['#siteTable', 'shreddit-feed'],
			type: 'remove',
			paths: 'inherit',
			inject: {
				mode: 'before',
			}
		},
		{
			id: regionId('subreddit-feed'),
			title: 'Subreddit 信息流',
			selectors: ['#siteTable', 'shreddit-feed'],
			type: 'remove',
			paths: [
				{ regexp: '^/r/[a-zA-Z0-9_-]+/(top\/)?$' }
			],
			inject: {
				mode: 'before',
			}
		},
		{
			id: regionId('nav'),
			title: '导航标签（旧版 Reddit）',
			selectors: ['ul.tabmenu', '#sr-header-area'],
			type: 'remove',
			paths: '*',
		},
		{
			id: regionId('carousel'),
			title: '图集轮播',
			selectors: ['shreddit-gallery-carousel'],
			type: 'remove',
			paths: '*',
		},
		{
			id: regionId('nav-sidebar'),
			title: '左侧导航栏',
			selectors: ['reddit-sidebar-nav'],
			type: 'hide',
			default: false,
			paths: '*',
		},
		{
			id: regionId('sidebar'),
			title: '右侧边栏',
			selectors: ['div.side', '#right-sidebar-contents'],
			type: 'hide',
			default: false,
			paths: '*',
		},
		{
			id: regionId('recently-viewed-links'),
			title: '最近浏览',
			selectors: ['div.spacer:has(div.sidecontentbox)', 'recent-posts'],
			type: 'remove',
			default: true,
			paths: '*',
		},
		{
			id: regionId('games-on-reddit'),
			title: 'Reddit 游戏',
			selectors: ['faceplate-tracker[noun="games_drawer"]', 'faceplate-tracker[noun="games_drawer"] + hr'],
			type: 'remove',
			default: true,
			paths: '*',
		}
	],
};

export default site;
