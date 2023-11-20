import SignUp from "./Components/authentication/SignUp";
import SignIn from "./Components/authentication/SignIn";
import {
  AuthContextProvider,
  UserAuth,
} from "./Components/context/AuthContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import ProtectedRoute from "./Components/authentication/ProtectedRoute";
import Navbar from "./Components/Navbar";
import SearchBar from "./Components/SearchBar";
import Explore from "./Components/Explore";
import Reels from "./Components/Reels";
import Message from "./Components/Message";
import Notification from "./Components/Notification";
import Create from "./Components/Create";
import Profile from "./Components/Profile";

const App = () => {
  return (
    <Router>
      <AuthContextProvider>
        <AppContent />
      </AuthContextProvider>
    </Router>
  );
};

const AppContent = () => {
  const { user } = UserAuth();
  return (
    <div>
      {user && <Navbar />}
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/homepage"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route path="/search" element={<SearchBar />} />
        <Route path="/explore" element={<Explore />} />
        <Route
          path="/reels"
          element={
            <ProtectedRoute>
              <Reels />
            </ProtectedRoute>
          }
        />
        <Route
          path="/messages"
          element={
            <ProtectedRoute>
              <Message />
            </ProtectedRoute>
          }
        />
        <Route
          path="/notifications"
          element={
            <ProtectedRoute>
              <Notification />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create"
          element={
            <ProtectedRoute>
              <Create />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
