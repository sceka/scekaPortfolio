import HomePage from "./pages/HomePage";
import "./App.scss";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import WorkPage from "./pages/WorkPage";
function App() {
    return (
        <div>
            <div className="background"></div>
            <BrowserRouter>
                <Routes>
                    <Route element={<HomePage />} path="/" />
                    <Route element={<WorkPage />} path="/work" />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
