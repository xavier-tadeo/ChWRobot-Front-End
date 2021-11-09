import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Form from "./components/Form";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PageCard from "./pages/PageCard";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HomePage />
                  <LoginPage />
                </>
              }
            />

            <Route path="/pageCard" element={<PageCard />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
