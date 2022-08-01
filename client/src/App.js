import HomePage from "./pages/HomePage";
import "./App.scss";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import WorkPage from "./pages/WorkPage";
import Contact from "./pages/Contact";
import About from "./pages/About";
function App() {
    return (
        <div>
            <div className="background"></div>
            <BrowserRouter>
                <Routes>
                    <Route element={<HomePage />} path="/" />
                    <Route element={<WorkPage />} path="/work" />
                    <Route element={<Contact />} path="contact" />
                    <Route element={<About />} path="about" />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
