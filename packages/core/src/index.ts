export type Listener<T> = (state: T) => void;

export function createStore<T>(initialState: T) {
	let state = initialState;
	const listeners = new Set<Listener<T>>();

	const get = () => state;

	const set = (partial: Partial<T> | ((prev: T) => Partial<T>)) => {
		const nextState = typeof partial === "function" ? partial(state) : partial;

		state = { ...state, ...nextState };
		listeners.forEach((listener) => listener(state));
	};

	const subscribe = (listener: Listener<T>) => {
		listeners.add(listener);

		// Return unsubscribe
		return () => listeners.delete(listener);
	};

	return { get, set, subscribe };
}
