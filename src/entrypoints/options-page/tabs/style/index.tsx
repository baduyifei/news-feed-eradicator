import { createEffect, createSignal } from "solid-js";
import { useOptionsPageState } from "../../state";
import { Toggle } from "/shared/components/toggle";

export const StyleTabContent = () => {
	const state = useOptionsPageState();
	const [customCss, setCustomCss] = createSignal('');
	const [customCssFeedback, setCustomCssFeedback] = createSignal<{ type: 'success' | 'error', message: string } | null>(null);
	let customCssFeedbackTimer: ReturnType<typeof setTimeout> | undefined;

	createEffect(() => {
		const storedCss = state.storage.customCss.get();
		if (storedCss != null) {
			setCustomCss(storedCss);
		}
	});

	const showCustomCssFeedback = (type: 'success' | 'error', message: string) => {
		if (customCssFeedbackTimer != null) {
			clearTimeout(customCssFeedbackTimer);
		}

		setCustomCssFeedback({ type, message });

		if (type === 'success') {
			customCssFeedbackTimer = setTimeout(() => setCustomCssFeedback(null), 1800);
		}
	};

	const saveCustomCss = async () => {
		const validation = validateCustomCss(customCss());
		if (!validation.valid) {
			showCustomCssFeedback('error', validation.message);
			return;
		}

		await state.storage.setCustomCss(customCss());
		showCustomCssFeedback('success', '已保存并应用');
	};

	const clearCustomCss = async () => {
		setCustomCss('');
		await state.storage.setCustomCss('');
		showCustomCssFeedback('success', '已清空并应用');
	};

	return (
		<div>
			<Toggle checked={() => state.storage.widgetStyle.get() === 'transparent'} setChecked={checked => state.storage.setWidgetStyle(checked ? 'transparent' : 'contained')}>
				<div class="space-y-1">
					<div>
						名言部件背景透明
					</div>
					<div class="text-secondary font-xs">
						注意：如果部件的明暗模式设置与站点不一致，这可能会影响文字的可读性。
					</div>
				</div>
			</Toggle>
			<Toggle checked={() => state.storage.regionHideStyle.get() === 'blur'} setChecked={checked => state.storage.setRegionHideStyle(checked ? 'blur' : 'hidden')}>
				<div class="space-y-1">
					<div>
						将隐藏的区域显示为模糊效果
					</div>
					<div class="text-secondary font-xs">
						若关闭，被隐藏的区域将完全不可见。
					</div>
				</div>
			</Toggle>

			<div class="p-4 space-y-2">
				<div class="space-y-1">
					<h3 class="font-lg font-bold">自定义 CSS</h3>
					<p class="text-secondary font-xs">这些 CSS 会注入到已启用的网站页面中，也会应用到信息流屏蔽器的名言部件。</p>
				</div>
				<textarea
					class={`w-full p-2 font-sm ${customCssFeedback()?.type === 'error' ? 'invalid' : ''}`}
					rows={10}
					spellcheck={false}
					placeholder={"/* 在这里输入自定义 CSS */\n#nfe-overlay {\n  opacity: 0.95;\n}"}
					value={customCss()}
					onInput={e => {
						setCustomCss(e.currentTarget.value);
						if (customCssFeedback()?.type === 'error') {
							setCustomCssFeedback(null);
						}
					}}
				/>
				<div class="flex gap-2 cross-center">
					<button class="primary font-sm" onClick={saveCustomCss}>{customCssFeedback()?.message === '已保存并应用' ? '已保存 ✓' : '保存并应用'}</button>
					<button class="tertiary font-sm" onClick={clearCustomCss}>{customCssFeedback()?.message === '已清空并应用' ? '已清空 ✓' : '清空'}</button>
					<div class={`font-sm custom-css-feedback ${customCssFeedback()?.type ?? ''}`} role="status" aria-live="polite">
						{customCssFeedback()?.message}
					</div>
				</div>
			</div>
		</div>
	);
};

type CustomCssValidation =
	| { valid: true }
	| { valid: false, message: string };

const validateCustomCss = (css: string): CustomCssValidation => {
	let inComment = false;
	let quote: '"' | "'" | null = null;
	let escaped = false;
	let braceDepth = 0;
	let parenDepth = 0;
	let bracketDepth = 0;

	for (let i = 0; i < css.length; i += 1) {
		const char = css[i];
		const next = css[i + 1];

		if (inComment) {
			if (char === '*' && next === '/') {
				inComment = false;
				i += 1;
			}
			continue;
		}

		if (quote != null) {
			if (escaped) {
				escaped = false;
				continue;
			}

			if (char === '\\') {
				escaped = true;
				continue;
			}

			if (char === quote) {
				quote = null;
			}
			continue;
		}

		if (char === '/' && next === '*') {
			inComment = true;
			i += 1;
			continue;
		}

		if (char === '"' || char === "'") {
			quote = char;
			continue;
		}

		if (char === '{') braceDepth += 1;
		if (char === '}') braceDepth -= 1;
		if (char === '(') parenDepth += 1;
		if (char === ')') parenDepth -= 1;
		if (char === '[') bracketDepth += 1;
		if (char === ']') bracketDepth -= 1;

		if (braceDepth < 0) return { valid: false, message: 'CSS 中有多余的 }，未保存。' };
		if (parenDepth < 0) return { valid: false, message: 'CSS 中有多余的 )，未保存。' };
		if (bracketDepth < 0) return { valid: false, message: 'CSS 中有多余的 ]，未保存。' };
	}

	if (inComment) return { valid: false, message: 'CSS 注释没有闭合，未保存。' };
	if (quote != null) return { valid: false, message: 'CSS 字符串没有闭合，未保存。' };
	if (braceDepth > 0) return { valid: false, message: 'CSS 中有未闭合的 {，未保存。' };
	if (parenDepth > 0) return { valid: false, message: 'CSS 中有未闭合的 (，未保存。' };
	if (bracketDepth > 0) return { valid: false, message: 'CSS 中有未闭合的 [，未保存。' };

	return { valid: true };
};
