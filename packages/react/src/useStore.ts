import type { Store } from "@cn-m/springbok-core";
import { useEffect, useState } from "react";

export function useStore<T extends object, U>(
	store: Store<T>,
	selector: (state: T) => U,
): U {
	const [slice, setSlice] = useState(() => selector(store.get()));

	useEffect(() => {
		const unsubscribe = store.subscribe((s) => {
			setSlice(selector(s));
		});
		return unsubscribe;
	}, [store, selector]);

	return slice;
}
