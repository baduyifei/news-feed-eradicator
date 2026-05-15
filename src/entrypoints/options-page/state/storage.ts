import { createResource } from "solid-js";
import { resourceObj } from "/lib/solid-util";
import { loadCustomCss, loadRegionHideStyle, loadWidgetStyle, saveCustomCss, saveRegionHideStyle, saveWidgetStyle, loadSettingsLocked, saveSettingsLocked, loadHideQuotes, saveHideQuotes, saveNewQuoteList } from "/storage/storage";
import type { StorageLocalV2, QuoteListId } from "/storage/schema";
import { sendToServiceWorker } from "/messaging/messages";

export class StorageState {
	widgetStyle = resourceObj(createResource(loadWidgetStyle));
	regionHideStyle = resourceObj(createResource(loadRegionHideStyle));
	settingsLocked = resourceObj(createResource(loadSettingsLocked));
	hideQuotes = resourceObj(createResource(loadHideQuotes));
	customCss = resourceObj(createResource(loadCustomCss));

	async setWidgetStyle(style: StorageLocalV2['widgetStyle']) {
		await saveWidgetStyle(style)
		this.widgetStyle.refetch();

		sendToServiceWorker({
			type: 'notifyOptionsUpdated',
		})
	}

	async setRegionHideStyle(style: StorageLocalV2['regionHideStyle']) {
		await saveRegionHideStyle(style);
		this.regionHideStyle.refetch();

		sendToServiceWorker({
			type: 'notifyOptionsUpdated',
		})
	}

	async setCustomCss(customCss: string) {
		await saveCustomCss(customCss);
		this.customCss.refetch();

		sendToServiceWorker({
			type: 'notifyOptionsUpdated',
		})
	}

	async setSettingsLocked(locked: boolean) {
		await saveSettingsLocked(locked);
		await this.settingsLocked.refetch();
	}

	async setHideQuotes(hideQuotes: boolean) {
		await saveHideQuotes(hideQuotes);
		this.hideQuotes.refetch();
		sendToServiceWorker({
			type: 'notifyOptionsUpdated',
		})
	}

	async newQuoteList(): Promise<QuoteListId> {
		const id = await saveNewQuoteList({ title: 'New List', quotes: [], imported: false, disabledQuoteIds: [] });
		return id;
	}
}
