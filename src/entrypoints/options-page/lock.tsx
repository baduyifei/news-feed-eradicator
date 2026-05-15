import { Show } from "solid-js";
import { useOptionsPageState } from "./state"

export const LockedSettingsOverlay = () => {
	const state = useOptionsPageState();

	return <Show when={state.settingsLockedDown()}>
		<div class="overlay flex cross-center axis-center">
			<div class="card shadow rounded p-4 text-center flex flex-col gap-2">
				<h3 class="font-xl">
					🔒 设置已锁定
				</h3>
				<p class="text-secondary">
					如需解锁，请先启动暂停，再点击下方按钮
				</p>
			</div>
		</div>
	</Show>
}

export const SettingsLockFooter	= () => {
	const state = useOptionsPageState();

	return <div class="p-2 bg-darken-100 flex gap-4 cross-center axis-end">
		<Show when={!state.settingsLockedDown()}>
			<label class="text-secondary font-xs">都设置好了？把它锁定。</label>
			<button class="primary font-sm" onClick={() => state.setSettingsLocked(true)}>锁定设置</button>
		</Show>
		<Show when={state.settingsLockedDown()}>
			<button class="secondary font-sm" disabled={!state.canUnlockSettings()} onClick={() => state.setSettingsLocked(false)}>
				解锁设置
			</button>
		</Show>
	</div>
}
