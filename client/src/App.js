import HomePage from "./pages/HomePage";
import "./App.scss";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import WorkPage from "./pages/WorkPage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";
function App() {
    return (
        <div>
            <div className="background"></div>
            <BrowserRouter>
                <Routes>
                    <Route element={<HomePage />} path="/" />
                    <Route element={<WorkPage />} path="/work" />
                    <Route element={<Contact />} path="/contact" />
                    <Route element={<About />} path="/about" />
                    <Route element={<Services />} path="/services" />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
