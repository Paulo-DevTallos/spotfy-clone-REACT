import { Routes, Route } from "react-router-dom";
import { About } from "../pages/About";
import { Home } from "../pages/Home";

export const RouterLinks = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about" element={<About />} />
	</Routes>
)
