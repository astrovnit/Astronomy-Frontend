import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Button, ButtonGroup, IconButton } from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";

import axios from "axios";
import { useToast } from "@chakra-ui/react";
import Footer from "../components/Footer";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const [show, setShow] = useState(false); // for visible icon in password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(-1);
  const [submit, setSubmit] = useState(false);

  const toast = useToast();
  const navigate = useNavigate();
  function handleChange(e) {
    switch (e.target.id) {
      case "username":
        setUsername(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
    }
  }

  function handleSubmit() {
    if (username == "" || password == "") {
      setMessage(2);
      return;
    }
    setSubmit(true);
    axios
      .post("https://astrovnit.onrender.com/login", null, {
        params: {
          username: username,
          password: password,
        },
      })
      .then((res) => {
        setMessage(res.data.message);
        if (res.data.isLoggedin == true) {
          props.setLogin(true);
          props.setUser(res.data.user);
        }
        setSubmit(false);
      });
  }

  useEffect(() => {
    setMessage(-1);
    if (props.user.isAdmin == true) {
      navigate("/addexperience");
    }
  });

  return (
    <div className="relative flex flex-col justify-center  overflow-hidden">
      <Navbar {...props} />
      <div className="my-10 lg:w-5/12 p-6 m-auto bg-white rounded-md shadow-xl border  lg:max-w-xl">
        <h1 className="text-3xl  text-center text-black  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            className="bi bi-person-lock m-auto mb-4"
            viewBox="0 0 16 16"
          >
            <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 5.996V14H3s-1 0-1-1 1-4 6-4c.564 0 1.077.038 1.544.107a4.524 4.524 0 0 0-.803.918A10.46 10.46 0 0 0 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h5ZM9 13a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2Zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1Z" />
          </svg>
          ADMIN
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label
              for="email"
              className="block text-sm  text-gray-800"
            >
              Username
            </label>
            <input
              id="username"
              onChange={handleChange}
              type="email"
              className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md  focus:ring-stone-800 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              for="password"
              className="block text-sm  text-gray-800"
            >
              Password
            </label>
            <input
              id="password"
              onChange={handleChange}
              type="password"
              className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:ring-stone-800 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-6 mb-5">
            <Button
              onClick={handleSubmit}
              isLoading={submit}
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-black rounded-md hover:bg-green-600 "
            >
              Login
            </Button>
          </div>
          {message == 0
            ? toast({
                title: "Invalid Credentials",
                description: "Please Try Again",
                status: "error",
                duration: 3000,
                isClosable: true,
              })
            : message == 1
            ? toast({
                title: "Log In Successfull",
                description: "",
                status: "success",
                duration: 3000,
                isClosable: true,
              })
            : message == 2
            ? toast({
                title: "Fields cant be empty",
                description: "Please fill all the fields",
                status: "warning",
                duration: 3000,
                isClosable: true,
              })
            : ""}
        </form>
      </div>
    </div>
  );
}

export default Login;
