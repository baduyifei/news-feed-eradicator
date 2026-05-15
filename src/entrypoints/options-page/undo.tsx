import { Show } from "solid-js";
import { useOptionsPageState } from "./state"
import { undoDeleteQuote, undoDeleteQuoteList } from "../../storage/storage";

export const Undo = () => {
	const state = useOptionsPageState();

	const undo = async () => {
		const undoState = state.undo.get();
		if (undoState == null) return;
		switch (undoState.type) {
			case 'deleteQuote':
				await undoDeleteQuote(undoState.quoteListId, undoState.quote)
				state.quoteLists.refetch();
				break;
			case 'deleteQuoteList':
				await undoDeleteQuoteList(undoState.quoteList);
				state.quoteLists.refetch();
				break;
		}
		state.undo.set(null);
	}

	const clear = () => {
		state.undo.set(null);
	}

	const undoMessage = () => {
		const undoState = state.undo.get();
		if (undoState == null) return;
		switch (undoState.type) {
			case 'deleteQuote':
				return `已删除 ${undoState.quote.author} 的名言`;
			case 'deleteQuoteList':
				return `已删除列表「${undoState.quoteList.title}」`;
		}
	}

	return <Show when={state.undo.get() != null}>
		<div class="flex space-x-2 p-4 cross-center card shadow">
			<p class="flex-1">{undoMessage()}</p>
			<button class="secondary" onClick={undo}>撤销</button>
			<button class="tertiary" onClick={clear}>x</button>
		</div>
	</Show>
}
