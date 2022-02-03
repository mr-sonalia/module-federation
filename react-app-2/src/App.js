import React, { Suspense } from "react";
const ReactCard = React.lazy(() => import("react_app/ReactCard"));

function App() {
	return (
		<div className="container">
			<p>React Container</p>
			<Suspense fallback={"Loading..."}>
				<ReactCard pName="Yash" pEmail="yash@d.c" pPhone={12344} />
			</Suspense>
		</div>
	);
}

export default App;
