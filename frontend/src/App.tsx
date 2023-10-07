import { Container, Loader, Navbar } from "./components";

import { Routes, Route } from "react-router-dom";
import { Saves, Search, ProfileInfo, Page404 } from "./pages";
import { ToastContainer } from "react-toastify";

export const App = () => {
	return (
		<Container>
			<Navbar />
			<Loader />
			<Routes>
				<Route path="/" index element={<Search />} />
				<Route path="/saves" element={<Saves />} />
				<Route path="/profile/:id" element={<ProfileInfo />} />
				<Route path="*" element={<Page404 />} />
			</Routes>
			<ToastContainer />
		</Container>
	);
};
