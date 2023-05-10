import React from "react";
import RootRouting from "./config/route/RootRouting";
import { Provider } from "react-redux";
import store from "./config/store";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./config/apollo/apolloClient";


const App = () => {
	return (
		<ApolloProvider client= {apolloClient}>
			<Provider store={store}>	
					<RootRouting />;
			</Provider>
		</ApolloProvider>
	);
};

export default App;
