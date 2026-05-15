import type { ParentComponent } from "solid-js";
import type { SnoozeMode } from "/storage/schema";
import { useOptionsPageState } from "../../state";
import { saveSnoozeMode } from "/storage/storage";
import { LockedSettingsOverlay, SettingsLockFooter } from "../../lock";

const SnoozeModeOption: ParentComponent<{ mode: SnoozeMode, title: string }> = ({ mode, title, children }) => {
	const state = useOptionsPageState();

	const onClick = async () => {
		await saveSnoozeMode(mode);
		state.snoozeMode.refetch();
	}

	return <li class="bg-darken-100 rounded">
		<label class={`block p-4 space-y-2 cursor-pointer ${state.snoozeMode.get() === mode ? 'outlined' : 'hoverable'}`}>
			<div class="flex gap-1">
				<input type="radio" class="radio" name="snooze-mode" disabled={state.settingsLockedDown()} checked={state.snoozeMode.get() === mode} onClick={onClick} />
				<div class="space-y-1">
					<span class="flex-1">{ title }</span>
					<div class="text-secondary font-sm ml-4">
						{ children }
					</div>
				</div>
			</div>
		</label>
	</li>
}

export const SnoozeTabContent = () => {
	const state = useOptionsPageState();

	return (
		<div>
			<div class="p-4 space-y-4 overlay-container">
				<ul class="space-y-2 z1 blur-disabled" aria-disabled={state.settingsLockedDown()}>
					<SnoozeModeOption mode="hold" title="按住暂停">
						需要按住暂停按钮一段时间才会开始暂停。按得越久，暂停时间越长。
					</SnoozeModeOption>

					<SnoozeModeOption mode="instant" title="即时暂停">
						对自制力没把握？选这个就能一键立即开始暂停。
					</SnoozeModeOption>
				</ul>
				<LockedSettingsOverlay />
			</div>
			<SettingsLockFooter />
		</div>
	);
};
