import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { routing } from "./Route";
import { PrivateRoute } from "./PrivateRoute";
const RootRouting = () => {
	const Login = useSelector((state)=> state.auth.isLogin);
	return (
		<BrowserRouter>
			<Routes>
				{routing.map((route, idx)=>{
					if (route.isPrivate){
						return(
							<Route
								key={idx}
								path={route.path}
								element={
									<PrivateRoute authentication={Login}>{route.element}</PrivateRoute>
								}
							/>
						);
					}
					return <Route key={idx} path={route.path} element={route.element} />;
				})}
			</Routes>
		</BrowserRouter>
	);
};
export default RootRouting;
