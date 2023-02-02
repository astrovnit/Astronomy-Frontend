import React, { useEffect, useState } from "react";
import { span, spanGroup } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import axios from "axios";
import { useToast } from "@chakra-ui/react";
function Navbar(props) {
  const [message, setMessage] = useState(-1);
  const [navbar, setNavbar] = useState(false);
  useEffect(() => {
    setMessage(-1);
  });
  const toast = useToast();
  function logout() {
    axios.get("https://astrovnit.onrender.com/logout").then((res) => {
      setMessage(res.data.message);
      props.setLogin(false);
      props.setUser({ isAdmin: false });
    });
  }
  console.log(props.user);
  return (
    <nav className="bg-white shadow mont p-1 ">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-0">
        <div>
          <div className="flex items-center justify-between   md:block">
            <img
              className="w-16 inline rounded-full"
              src="../logo.png"
              alt="logo"
            />
            <span className="px-2  md:text-lg text-sm">
              Ashlesha Astronomy Club
            </span>

            <div className="md:hidden ">
              <button
                className="p-2  rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className=" items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-center">
              <Link to="/">
                <li className=" hover:cursor-pointer md:my-auto mb-3   hover:text-blue-600 text-lg">
                  Home
                </li>
              </Link>
              <Link to="/blogs">
                <li className=" hover:cursor-pointer md:my-auto mb-3  hover:text-blue-600 text-lg">
                  Blog
                </li>
              </Link>
              <Link to="/team">
                <li className=" hover:cursor-pointer md:my-auto mb-3  hover:text-blue-600 text-lg">
                  Team
                </li>
              </Link>
              <Link to="/contact">
                <li className=" hover:cursor-pointer md:my-auto mb-3  hover:text-blue-600 text-lg">
                  Contact Us
                </li>
              </Link>
              {props.user.isAdmin == true ? (
                <Link to="/dashboard">
                  <li className=" hover:cursor-pointer md:my-auto mb-3  hover:text-blue-600 text-lg">
                    Approvals
                  </li>
                </Link>
              ) : (
                ""
              )}
              {props.user.isAdmin ? (
                <>
                  <Link to="/addexperience">
                    <li className=" hover:cursor-pointer md:my-auto mb-3  hover:text-blue-600 text-lg">
                      Add Blog
                    </li>
                  </Link>

                  <li
                    onClick={logout}
                    className=" hover:cursor-pointer md:my-auto mb-3  hover:text-blue-600 text-lg"
                  >
                    Log Out
                  </li>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <li className=" hover:cursor-pointer md:my-auto mb-3  hover:text-blue-600 text-lg flex justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-lock my-auto me-2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                      </svg>
                      Admin
                    </li>
                  </Link>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
      {message == 1
        ? toast({
            title: "Logged Out Successfully",

            status: "success",
            duration: 3000,
            isClosable: true,
          })
        : ""}
    </nav>
  );
}

export default Navbar;

{
  /* <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-light tw-bg-gray-600">
        <div className="container-fluid">
          <img className="logo" src="../../astrologo.jpeg" />
          <a className="navbar-brand ms-2 text-light" href="#">
            Ashlesha Astronomy Club
          </a>
          <span
            className="navbar-toggler "
            type="span"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </span>

          <div
            className="collapse navbar-collapse readable text-center m-auto "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page"></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"></a>
              </li>
            </ul>

            <form className="d-flex justify-content-center" role="search">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-auto text-light tw-text-lg">
                <li className="nav-item">
                  <Link to="/">
                    <span
                      colorScheme=""
                      className=" me-3 hover:tw-text-sky-400"
                      variant=""
                      size="md"
                      width="90%"
                    >
                      Home
                    </span>
                  </Link>
                </li>
                {props.user.isAdmin == true ? (
                  <li className="nav-item">
                    <Link to="/dashboard">
                      <span
                        colorScheme=""
                        className="me-3  hover:tw-text-sky-400"
                        variant=""
                        size="md"
                        width="90%"
                      >
                        Approvals
                      </span>
                    </Link>
                  </li>
                ) : (
                  ""
                )}
                <li className="nav-item">
                  <Link to="/internship">
                    <span
                      colorScheme=""
                      className="me-3   hover:tw-text-sky-400"
                      variant=""
                      size="md"
                      width="90%"
                    >
                      Internship
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/placement">
                    <span
                      colorScheme=""
                      className="me-3  hover:tw-text-sky-400"
                      variant=""
                      size="md"
                      width="90%"
                    >
                      Placement
                    </span>
                  </Link>
                </li>
                {props.isLogin ? (
                  <>
                    <li className="nav-item">
                      <Link to="/addexperience">
                        <span
                          colorScheme=""
                          className="me-3  hover:tw-text-sky-400"
                          variant=""
                          size="md"
                          width="90%"
                        >
                          Add Experience
                        </span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link>
                        <span
                          colorScheme=""
                          className="me-3  hover:tw-text-sky-400"
                          variant=""
                          size="md"
                          onClick={logout}
                          width="90%"
                        >
                          Log Out
                        </span>
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link to="/login">
                        <span
                          className="me-3  hover:tw-text-sky-400"
                          colorScheme="black"
                          variant="outline"
                          size="md"
                          width="90%"
                        >
                          Log In
                        </span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/signup">
                        <span
                          className="me-3  hover:tw-text-sky-400"
                          colorScheme=""
                          variant=""
                          size="md"
                          width="90%"
                        >
                          Sign Up
                        </span>
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </form>
          </div>
        </div>
      </nav>
      {message == 1
        ? toast({
            title: "Logged Out Successfully",

            status: "success",
            duration: 3000,
            isClosable: true,
          })
        : ""}
    </div> */
}
