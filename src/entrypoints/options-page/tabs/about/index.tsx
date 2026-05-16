import { useOptionsPageState } from "../../state";

export const AboutTabContent = () => {
	const state = useOptionsPageState();

	return (
		<div class="p-8 space-y-4">
				<div class="prose">
					<h3>关于这个中文版本</h3>
					<p>「信息流屏蔽器 - 中文版」是基于开源项目 <a href="https://github.com/jordwest/news-feed-eradicator">News Feed Eradicator</a> 的非官方中文汉化版本。</p>
					<p>原项目由 <a href="https://west.io/">Jordan West</a> 与<a href="https://github.com/jordwest/news-feed-eradicator/graphs/contributors">贡献者们</a>开发；中文汉化与维护由 <a href="https://baduyifei.com">baduyifei</a> 完成。</p>
					<p>这个版本面向中文用户，目标是打开即用、一看就懂，把注意力真正用在「屏蔽干扰」这件事本身上。</p>
				</div>

				<div class="prose">
					<h3>原项目说明</h3>
					<p>原作者 Jordan West 对这个项目的说明：</p>
					<p>2012 年，Jordan West 用一个周末做出了「News Feed Eradicator」，只是为了帮助自己抵御让人上瘾的 Facebook 信息流。</p>
					<p>他最初没有预料到它会对很多人有用，也没有预料到注意力被侵蚀会变得如此严重。</p>
					<p>我们如今正身处一场针对人类、以营利为目的、史上规模最大的心理实验之中——我们需要工具来保护自己。</p>
				</div>

				<div class="prose">
					<h3>如何支持这个项目</h3>
					<p>谢谢！你可以通过这几种方式帮上忙：</p>
					<ul>
						<li>把这个中文版本介绍给需要减少信息流干扰的朋友</li>
						<li>在 <a href="https://github.com/baduyifei/news-feed-eradicator">中文版源码仓库</a> 反馈问题或贡献改进</li>
						<li>在 <a href="https://github.com/jordwest/news-feed-eradicator">上游原项目</a> 了解原版和贡献 bug 修复</li>
						<li><a href="https://gumroad.com/l/news-feed-eradicator">支持原作者 Jordan West</a></li>
					</ul>
				</div>

				<div class="prose">
				<h3>我想推荐一个新站点</h3>
				<p>你可以在 <a href="https://github.com/baduyifei/news-feed-eradicator/issues">中文版仓库</a> 提出中文版本相关建议；如果希望建议进入上游原版，也可以前往 <a href="https://github.com/jordwest/news-feed-eradicator/discussions/categories/ideas">上游 GitHub Ideas 讨论区</a>。</p>
				</div>

				<div class="prose">
					<h3>我想建议一个功能</h3>
					<p>如果是中文版本的汉化、样式或使用体验建议，请在 <a href="https://github.com/baduyifei/news-feed-eradicator/issues">中文版仓库</a> 提交。</p>
					<p>如果是希望合并进上游原版的新功能，建议先在 <a href="https://github.com/jordwest/news-feed-eradicator/discussions/categories/ideas">上游 GitHub Ideas 讨论区</a> 提交并说明使用场景。</p>
				</div>

				<div class="prose">
					<h3>某个站点失效了，或我发现了 bug</h3>
					<p>如果问题出现在这个中文版本中，请在 <a href="https://github.com/baduyifei/news-feed-eradicator/issues">中文版仓库提交 issue</a>。如果能确认是上游原版也存在的问题，也可以到 <a href="https://github.com/jordwest/news-feed-eradicator/issues">上游仓库</a> 报告。</p>
				</div>

				<div class="prose">
					<h3>中文版汉化</h3>
					<p>本扩展的中文版由 <a href="https://baduyifei.com">baduyifei</a> 汉化。</p>
					<p>汉化与改动内容：</p>
					<ul>
						<li>选项页全部界面：站点、暂停、名言、样式、关于、调试 六个标签页</li>
						<li>注入到社交网站上的名言卡片与工具栏文案</li>
						<li>83 条内置名言改为英文原文在上、中文译文在下的中英对照格式</li>
						<li>内置名言作者补充中文译名</li>
						<li>12 个支持站点的「可隐藏区域」名称</li>
						<li>时长显示改为中文格式</li>
						<li>扩展名称与描述</li>
						<li>重新设计了扩展图标（信息流屏蔽主题）</li>
						<li>新增自定义 CSS 功能，支持用户按需调整界面样式</li>
					</ul>
				</div>

				<div class="prose">
					<h3>开源与许可证</h3>
					<p>本中文版本遵循原项目的 <a href="https://www.gnu.org/licenses/agpl-3.0.html">AGPL-3.0-only</a> 许可证发布。</p>
					<p>源码仓库：<a href="https://github.com/baduyifei/news-feed-eradicator">baduyifei/news-feed-eradicator</a></p>
					<p>上游原项目：<a href="https://github.com/jordwest/news-feed-eradicator">jordwest/news-feed-eradicator</a></p>
				</div>

				<div class="text-center">
					<button class="font-xs text-secondary" onClick={() => state.page.set('debug')}>显示调试信息</button>
				</div>
			</div>
	);
};
