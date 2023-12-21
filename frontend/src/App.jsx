import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import ActivatePage from "./pages/ActivatePage";
import NotFoundPage from "./pages/notFoundPage";
import TrainingSchedulePage from "./pages/TrainingSchedulePage";
import FoodDescriptionsPage from "./pages/FoodDescriptionsPage";
import Appetizers from "./CategoryPages/Appetizers";
import Entrees from "./CategoryPages/Entrees";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/resetpassword" element={<ResetPasswordPage />} />
          <Route path="/activate/:uid/:token" element={<ActivatePage />} />
          <Route path="/training-schedule" element={<TrainingSchedulePage />} />
          <Route path="/food-descriptions" element={<FoodDescriptionsPage />} />
          <Route path="/apps" element={<Appetizers />} />
          <Route path="/entrees" element={<Entrees />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
