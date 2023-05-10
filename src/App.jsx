import React from "react";
import RootRouting from "./config/route/RootRouting";
import { Provider } from "react-redux";
import store from "./config/store";
const App = () => {
	return (
			<Provider store={store}>	
					<RootRouting />;
			</Provider>
	);
};

export default App;
