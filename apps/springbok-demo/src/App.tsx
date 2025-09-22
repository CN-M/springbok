import "./App.css";
import { useState } from "react";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="h-dvh flex flex-col items-center justify-center">
			<div className="p-8 bg-accent w-fit rounded-xl">
				<h2 className="text-3xl text-accent-foreground">This is a box</h2>
			</div>
		</div>
	);
}

export default App;
