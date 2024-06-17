import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Dashboard, Register, Edit, Error, PrivateRoute } from "./pages";
// import Navbar from "./components/Navbar";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route path="/register" element={<Register />} />
        <Route path="/edit/:id" element={<Edit />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
