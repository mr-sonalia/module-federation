import React, { Suspense } from "react";
const ReactCard = React.lazy(_ => import("react_app"));

function App() {
	return (
		<div>
			<Suspense fallback="loading">
				<ReactCard />
			</Suspense>
		</div>
	);
}

export default App;
