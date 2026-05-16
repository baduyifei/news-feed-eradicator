# 信息流屏蔽器 - 中文版

这是基于开源项目 [News Feed Eradicator](https://github.com/jordwest/news-feed-eradicator) 的非官方中文汉化版本。

原项目由 [Jordan West](https://west.io/) 与贡献者们开发；中文汉化与维护由 [baduyifei](https://baduyifei.com) 完成。

本项目的目标是让中文用户打开即用、一看就懂，用名言替换社交媒体信息流，把注意力真正用在“屏蔽干扰”这件事本身上。

## 与上游项目的关系

本仓库是 `jordwest/news-feed-eradicator` 的 Fork，不是原作者发布的官方版本。

除非相关修改通过 Pull Request 被上游作者合并，否则本仓库中的中文化改动只属于 `baduyifei/news-feed-eradicator` 这个中文版本，不会影响上游原项目。

## 主要改动

- 完成扩展选项页中文汉化：站点、暂停、名言、样式、关于、调试等界面。
- 完成注入到社交网站上的名言卡片与工具栏中文文案。
- 将 83 条内置名言改为英文原文在上、中文译文在下的中英对照格式。
- 为内置名言作者补充中文译名。
- 汉化 12 个支持站点的可隐藏区域名称。
- 将时长显示改为中文格式。
- 更新扩展名称与描述为中文版本。
- 重新设计信息流屏蔽主题扩展图标。
- 新增自定义 CSS 功能，支持用户按需调整界面样式。

## 安装方式

### Chrome Web Store

当前中文版本正在准备上架 Chrome Web Store。上架后，推荐普通用户从 Chrome Web Store 安装。

### 手动安装

也可以从本仓库的 Release 下载 zip 包，然后使用浏览器的“加载已解压的扩展程序”安装：

1. 下载 Release 中的 `NewsFeedEradicator_*.zip`。
2. 解压 zip 文件。
3. 打开 Chrome 或 Edge，进入 `chrome://extensions` 或 `edge://extensions`。
4. 打开“开发者模式”。
5. 点击“加载已解压的扩展程序”。
6. 选择解压后的扩展目录。

不建议通过拖入 CRX 的方式安装。现代 Chrome / Edge 会限制非商店来源的 CRX，容易出现 `CRX_REQUIRED_PROOF_MISSING` 或“不明来源扩展”等提示。

## 开发

这个扩展基于 WebExtension 标准构建，主要支持 Chrome、Edge 和 Firefox 等浏览器。

依赖：

- [Bun](https://bun.com/)
- make

开发构建：

```sh
make dev
```

构建可分发 zip：

```sh
make
```

构建产物会输出到 `build` 和 `dist` 目录。

## Chrome Web Store 上架资料

Chrome Web Store 的标题、描述、权限说明和隐私说明草稿见 [CHROME_WEB_STORE.md](./CHROME_WEB_STORE.md)。

隐私政策草稿见 [PRIVACY.md](./PRIVACY.md)。如果发布到 Chrome Web Store，建议在开发者后台填写这个公开文件的链接。

## 许可证

本中文版本继承原项目许可证，使用 [GNU Affero General Public License v3.0 only](./LICENSE) 发布。

根据 AGPL-3.0-only，本项目的修改版和分发版本应继续保留相同许可证，并向用户提供对应源代码。

## 反馈

- 中文版本问题：请在 [baduyifei/news-feed-eradicator](https://github.com/baduyifei/news-feed-eradicator/issues) 提交 issue。
- 上游原项目问题：请访问 [jordwest/news-feed-eradicator](https://github.com/jordwest/news-feed-eradicator)。
