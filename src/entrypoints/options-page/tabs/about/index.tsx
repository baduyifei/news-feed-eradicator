import { useOptionsPageState } from "../../state";

export const AboutTabContent = () => {
	const state = useOptionsPageState();

	return (
		<div class="p-8 space-y-4">
				<div class="prose">
					<p>2012 年，我用一个周末做出了「信息流屏蔽器」（News Feed Eradicator），只是为了帮自己抵御让人上瘾的 Facebook 信息流。</p>
					<p>我从没指望它对很多人有用，只是想着不妨先放到网上。我万万没料到的是，对我们注意力的侵蚀会变得如此猖獗，也没料到它会给社会带来这样的后果。</p>
					<p>我们如今正身处一场针对人类、以营利为目的、史上规模最大的心理实验之中——我们需要工具来保护自己。</p>
				</div>

				<div class="prose">
					<h3>如何支持这个项目</h3>
					<p>谢谢！你可以通过这几种方式帮上忙：</p>
					<ul>
						<li>在 <a href="https://chrome.google.com/webstore/detail/news-feed-eradicator-for/fjcldmjmjhkklehbacihaiopjklihlgg?hl=en">Chrome 应用商店</a> 或 <a href="https://addons.mozilla.org/en-US/firefox/addon/news-feed-eradicator/">Firefox 商店</a> 留个评价</li>
						<li>把这个扩展介绍给你的朋友</li>
						<li><a href="https://gumroad.com/l/news-feed-eradicator">请我喝杯咖啡</a></li>
						<li><a href="https://github.com/jordwest/news-feed-eradicator">在 GitHub 上</a> 贡献 bug 修复</li>
					</ul>
				</div>

				<div class="prose">
				<h3>我想推荐一个新站点</h3>
				<p>在 <a href="https://github.com/jordwest/news-feed-eradicator/discussions/categories/ideas">GitHub 讨论区</a> 提交新站点建议，或为已有建议点赞。</p>
				</div>

				<div class="prose">
					<h3>我想建议一个功能</h3>
					<p>如果你有想法，请在 <a href="https://github.com/jordwest/news-feed-eradicator/discussions/categories/ideas">GitHub Ideas 讨论区</a> 提交（如果已存在就点赞）。</p>
					<p>通常我很少新增功能——这是个业余时间做的项目，我认为它基本已经完成，也想尽量保持简单；不过我确实会阅读并认真考虑所有这些建议。</p>
				</div>

				<div class="prose">
					<h3>某个站点失效了，或我发现了 bug</h3>
					<p>请 <a href="https://github.com/jordwest/news-feed-eradicator/issues">在 GitHub 上提 issue</a> 来报告 bug</p>
				</div>

				<div class="prose">
					<h3>中文版汉化</h3>
					<p>本扩展的中文版由 <a href="https://baduyifei.com">baduyifei</a> 汉化。</p>
					<p>这个扩展可以让中文用户打开即用、一看就懂，把注意力真正用在「屏蔽干扰」这件事本身上。</p>
					<p>汉化与改动内容：</p>
					<ul>
						<li>选项页全部界面：站点、暂停、名言、样式、关于、调试 六个标签页</li>
						<li>注入到社交网站上的名言卡片与工具栏文案</li>
						<li>12 个支持站点的「可隐藏区域」名称</li>
						<li>时长显示改为中文格式</li>
						<li>扩展名称与描述</li>
						<li>重新设计了扩展图标（信息流屏蔽主题）</li>
					</ul>
				</div>

				<div class="text-center">
					<button class="font-xs text-secondary" onClick={() => state.page.set('debug')}>显示调试信息</button>
				</div>
			</div>
	);
};
