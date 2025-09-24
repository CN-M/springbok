export type Listener<T> = (state: T) => void;

export function createStore<T extends object>(initialState: T) {
	let state = initialState;
	const listeners = new Set<Listener<T>>();

	const get = () => state;

	const set = (partial: Partial<T> | ((prev: T) => Partial<T>)) => {
		const next = typeof partial === "function" ? partial(state) : partial;
		state = { ...state, ...next };
		listeners.forEach((listener) => listener(state));
	};

	const subscribe = (listener: Listener<T>) => {
		listeners.add(listener);
		return () => {
			listeners.delete(listener); // ✅ returns void now
		};
	};

	return { get, set, subscribe };
}

export type Store<T extends object> = ReturnType<typeof createStore<T>>;
