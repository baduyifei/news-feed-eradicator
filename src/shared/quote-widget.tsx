import { createResource, Show, type Accessor } from "solid-js"
import { type RequestQuoteResponse, sendToServiceWorker } from "../messaging/messages"
import type { Theme } from "../storage/schema";
import type { SiteId } from "../types/sitelist";
import { createSignal } from "solid-js";
import { loadHideWidgetToolbar, saveHideWidgetToolbar } from "/storage/storage";

const [quote, { refetch: refetchQuote }] = createResource(async () => {
	return sendToServiceWorker<RequestQuoteResponse>({
		type: 'requestQuote'
	});
})

const toggleTheme = async (e: { preventDefault: () => void }, siteId: SiteId, theme: Theme) => {
	e.preventDefault();
	await sendToServiceWorker({
		type: 'setSiteTheme',
		siteId,
		theme: theme === 'light' ? 'dark' : 'light',
	})
}

export const QuoteWidget = ({ siteId, theme, widgetStyle }: { siteId: SiteId | null, theme: Accessor<Theme | null>, widgetStyle: Accessor<'contained' | 'transparent'> }) => {
	const [collapsed, setCollapsedLocal] = createSignal(true);

	// Quote must be enabled if it appears in here
	const [enabled, setEnabled] = createSignal(true);

	const nextQuote = async () => {
		await refetchQuote();
		setEnabled(true);
	}

	loadHideWidgetToolbar().then(hidden => setCollapsedLocal(hidden));

	const setCollapsed = (collapsed: boolean) => {
			saveHideWidgetToolbar(collapsed);
			setCollapsedLocal(collapsed);
	}

	const setQuoteEnabled = async (enabled: boolean) => {
			const q = quote();
			if (q == null) return;

			setEnabled(enabled);

			await sendToServiceWorker({
				type: 'setQuoteEnabled',
				quoteListId: q.quoteListId,
				id: q.id,
				enabled,
			});
	}

	const openOptionsPage = () => sendToServiceWorker({ type: 'openOptionsPage' })

	return <aside class="space-y-2">
		<Show when={quote()}>
			<div class={`${widgetStyle() === 'contained' ? 'bg-widget-ground b-1 shadow rounded' : ''} font-md`}>
				<div class="w-full position-relative">
					<Show when={collapsed()}>
						<div class="p-2 flex w-full axis-end position-absolute lr-0 pointer-events-none">
							<button class="tertiary px-2 pointer-events-all" aria-label="显示信息流屏蔽器工具栏" onClick={() => setCollapsed(false)}>︙</button>
						</div>
					</Show>
					<Show when={!collapsed()}>
						<div class="p-2 bg-darken-100 space-x-4 flex w-full cross-center">
							<Show when={siteId != null}>
								<label for="theme-toggle" class="cursor-pointer text-primary gap-1 flex cross-center">
									<span aria-label="浅色模式">☀️</span>
									<input id="theme-toggle" type="checkbox" checked={theme() === 'dark'} class="toggle" onInput={e => toggleTheme(e, siteId!, theme() ?? 'light')} />
									<span aria-label="深色模式">🌙</span>
								</label>
							</Show>
							<div class="flex-1" />
							<button class="primary px-2 font-sm" onClick={() => setCollapsed(true)}>隐藏工具栏</button>
						</div>
					</Show>
				</div>
				<div class={`p-4 space-y-2 ${collapsed() ? 'pr-8' : ''}`}>
					<blockquote class="quote-border-left quote-text p-2 text-primary">{quote()?.text}</blockquote>
					<figcaption class="quote-author text-secondary">{quote()?.author}</figcaption>
				</div>
				<Show when={!collapsed()}>
					<div class="p-2 bg-darken-100 shadow space-x-4 flex w-full">
						<div class="space-x-2 flex-1 flex">
							<button class="tertiary text-primary font-sm" onClick={nextQuote}>下一条 &gt;</button>
							<label for="quote-toggle" class="cursor-pointer hoverable flex cross-center p-2 text-secondary rounded font-sm gap-1">
								<input id="quote-toggle" type="checkbox" class="checkbox" checked={enabled()} onChange={e => setQuoteEnabled(e.currentTarget.checked)} />
								<span>以后继续显示这条名言</span>
							</label>
							<div class="flex-1" />
							<button class="tertiary font-sm" onClick={openOptionsPage}>更多选项…</button>
						</div>
					</div>
				</Show>
		</div>
		</Show>
		<footer class="flex axis-center">
				<button class="font-xs tertiary bg-transparent text-subtle text-shadow" onClick={openOptionsPage}>信息流屏蔽器</button>
		</footer>
	</aside>
}
