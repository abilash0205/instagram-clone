import SignUp from "./Components/authentication/SignUp";
import SignIn from "./Components/authentication/SignIn";
import AuthDetails from "./Components/authentication/AuthDetails";
import { AuthContextProvider } from "./Components/context/AuthContext";
import AuthenticateNavbar from "./Components/AuthenticateNavbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import SearchBar from "./Components/SearchBar";
import Explore from "./Components/Explore";
import Reels from "./Components/Reels";
import Message from "./Components/Message";
import Notification from "./Components/Notification";
import Create from "./Components/Create";
import Profile from "./Components/Profile";
// import { useState } from "react";
// import ProtectedRoute from "./Components/authentication/ProtectedRoute";

const App = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(null);
  return (
    <div>
      <Router>
        <AuthContextProvider>
          <AuthenticateNavbar />
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
          <Routes>
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/search" element={<SearchBar />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/reels" element={<Reels />} />
            <Route path="/message" element={<Message />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/create" element={<Create />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <AuthDetails />
        </AuthContextProvider>
      </Router>
    </div>
  );
};

export default App;
