import { type Site, siteId, regionId } from "../types/sitelist";

export const site: Site = {
			id: siteId('youtube'),
			title: 'YouTube',
			hosts: ['www.youtube.com', 'youtube.com'],
			paths: ['/', '/gaming', '/podcasts'],
			regions: [
				{
					id: regionId('feed'),
					title: '主信息流',
					selectors: ['ytd-browse'],
					paths: 'inherit',
					type: 'hide',
					inject: {
						mode: 'overlay-fixed',
						overlayZIndex: 2019,
					},
				},
				{
					id: regionId('shorts-button'),
					title: 'Shorts 按钮',
					type: 'remove',
					paths: '*',
					selectors: ['ytd-guide-entry-renderer:has(a[title="Shorts"])', 'ytd-mini-guide-entry-renderer:has(a[title="Shorts"])'],
				},
				{
					id: regionId('explore-nav'),
					title: '探索导航菜单',
					type: 'remove',
					paths: '*',
					selectors: ['ytd-guide-section-renderer:nth-child(4)']
				},
				{
					id: regionId('end-screen-suggested'),
					title: '结束画面推荐视频',
					paths: '*',
					type: 'remove',
					selectors: ['.ytp-fullscreen-grid'],
				},
				{
					id: regionId('sidebar-suggested'),
					title: '推荐视频侧边栏',
					type: 'hide',
					paths: '*',
					selectors: ['ytd-watch-next-secondary-results-renderer'],
				},
				{
					id: regionId('comments'),
					title: '视频评论',
					type: 'hide',
					paths: '*',
					selectors: ['ytd-comments'],
					default: false,
				},
				{
					id: regionId('live-chat'),
					title: '实时聊天',
					type: 'hide',
					paths: '*',
					selectors: ['ytd-live-chat-frame'],
					default: false,
				},
				{
					id: regionId('notifications'),
					title: '通知',
					type: 'remove',
					paths: '*',
					selectors: ['ytd-notification-topbar-button-renderer'],
					default: false,
				},
				{
					id: regionId('subscriptions'),
					title: '订阅',
					type: 'remove',
					paths: '*',
					selectors: [
						'ytd-guide-section-renderer:nth-child(2)', 
						'ytd-mini-guide-renderer:nth-child(2)'
					],
					default: false,
				},
			],
		}

export default site;
