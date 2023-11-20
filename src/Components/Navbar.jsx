import { useState } from "react";
import { navigationItems } from "../constants";
import { Link, useNavigate } from "react-router-dom";
import { Nav, NavDropdown } from "react-bootstrap";
import { UserAuth } from "./context/AuthContext";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const { logoutUser } = UserAuth();
  const navigate = useNavigate();
  const logoutExistingUser = async () => {
    try {
      await logoutUser();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <button
        data-drawer-target="separator-sidebar"
        data-drawer-toggle="separator-sidebar"
        aria-controls="separator-sidebar"
        type="button"
        onClick={toggleSidebar}
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm bg-gray-300 text-gray-500 rounded-lg sm:hidden z-50 fixed"
      >
        {/* <span className="sr-only"></span> */}
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <aside
        className={`flex flex-col w-[250px] h-screen px-3 py-8  bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700 fixed top-0 left-0 transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 z-10`}
        id="separator-sidebar"
      >
        <a href="/homepage">
          <p className="text-4xl mt-3 pt-2" style={{ fontFamily: "Billabong" }}>
            Instagram
          </p>
        </a>

        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav>
            {navigationItems.map(({ id, text, src, path }) => (
              <Link
                className="flex items-center px-1 py-2 my-2 text-gray-700 rounded-md dark:bg-gray-800 transition-colors duration-300 transform hover:bg-gray-200 hover:text-gray-700"
                key={id}
                to={`/${path}`}
              >
                <img className="w-7 h-7" src={src} alt="" />
                <span className="mx-4 font-medium">{text}</span>
              </Link>
            ))}
            {/* <img className="w-7 h-7" src={More} alt="" /> */}
            <Nav>
              <NavDropdown
                title="More"
                className="flex items-center px-1 text-gray-700 rounded-md dark:bg-gray-800 transition-colors duration-300 transform hover:bg-gray-200 hover:text-gray-700 mt-5 font-medium"
              >
                <NavDropdown.Item>Settings</NavDropdown.Item>
                <NavDropdown.Item>Your Activity</NavDropdown.Item>
                <NavDropdown.Item onClick={logoutExistingUser}>
                  Log out
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default Navbar;
