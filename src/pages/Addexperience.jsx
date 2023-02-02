import React, { useState, useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Select } from "@chakra-ui/react";
import { Badge } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  IconButton,
  Input,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
function Addexperience(props) {
  const [message, setMessage] = useState(-1);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [lock, setLock] = useState(false);
  const [blog, setBlog] = useState("");
  const [submit, setSubmit] = useState(false);

  const navigate = useNavigate();
  const toast = useToast();
  useEffect(() => {
    setMessage(-1);
    if (!props.isLogin) {
      navigate("/login");
    }
  });

  function handleChange(e) {
    switch (e.target.id) {
      case "name":
        setName(e.target.value);
        break;
      case "title":
        setTitle(e.target.value);
        break;
      case "blog":
        setBlog(e.target.value);
        break;
    }
  }
  function handleLock(e) {
    setLock(!lock);
  }
  function inputClear() {
    document.getElementById("name").value = "";
    document.getElementById("title").value = "";
    document.getElementById("blog").value = "";
  }
  function handleSubmit() {
    if (name == "" || title == "" || blog == "") {
      setMessage(0);
      return;
    } else {
      setSubmit(true);
      var newBlog = {
        name: name,
        title: title,
        blog: blog,
      };
      axios
        .post("https://astrovnit.onrender.com/postexp", null, {
          params: newBlog,
        })
        .then((res) => {
          setMessage(res.data.message);
          setSubmit(false);
          inputClear();
        });
    }
  }

  return (
    <div>
      <Navbar {...props} />
      <center className="mont">
        <h1 className="text-center display-6 mt-4 ">Add Article</h1>
        <form className="my-9 w-4/5 text-start border-2 rounded-xl p-6 shadow-xl">
          <div className="relative z-0 w-full mb-6 group ">
            <input
              type="text"
              id="name"
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_first_name"
              className="peer-focus:font-medium absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-lg"
            >
              Author
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              id="title"
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent  border-b-2 border-gray-300 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_first_name"
              className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Title
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <div className="relative z-0 w-full mb-6 group">
              <textarea
                rows="8"
                type="text"
                id="blog"
                onChange={handleChange}
                className=" block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent  border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_last_name"
                className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Text
              </label>
            </div>
          </div>
          <div className="mx-auto text-center">
            <Button
              isLoading={submit}
              onClick={handleSubmit}
              className="mx-auto items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto p-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit For Approval
            </Button>
            {message == 0
              ? toast({
                  title: "Please fill all the fields",
                  status: "warning",
                  duration: 3000,
                  isClosable: true,
                })
              : message == 1
              ? toast({
                  title: "Submitted for approval Successfully",
                  description: "",
                  status: "success",
                  duration: 3000,
                  isClosable: true,
                })
              : message == 2
              ? toast({
                  title: "Some Error Occured",
                  description: "",
                  status: "error",
                  duration: 3000,
                  isClosable: true,
                })
              : ""}
          </div>
        </form>
      </center>
    </div>
  );
}

export default Addexperience;

// {/* <div>
//       <Navbar {...props} />
//       {/* <img className="w-25 m-auto" src="../../write.png" /> */}
//       <h1 className="text-center display-6 mt-4">Add Experience</h1>
//       <div className="container  row m-auto">
//         <div className="col-md-12">
//           <div className="login-box m-auto mb-5 p-3 rounded-4 border border-dark mt-5">
//             {/* Name  ******************************************************************/}
//             <FormControl className="mb-2 m-auto" isRequired>
//               <FormLabel>Name</FormLabel>
//               <Input
//                 className="add-exp-cursive"
//                 id="name"
//                 onChange={handleChange}
//                 isDisabled={lock}
//               />
//             </FormControl>
//             <FormControl className="mb-2 m-auto" isRequired>
//               <FormLabel>Blog Title</FormLabel>
//               <Input
//                 className="add-exp-cursive"
//                 id="title"
//                 onChange={handleChange}
//                 isDisabled={lock}
//               />
//             </FormControl>

//             <div className="d-flex justify-content-center">
//               <Button
//                 className="btn btn-outline-success mt-4"
//                 colorScheme=""
//                 variant=""
//                 size="md"
//                 onClick={handleLock}
//               >
//                 {lock ? "Edit Response" : "Lock"}
//               </Button>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-12">
//           <div className="login-box m-auto mb-5 p-3 rounded-4 border border-dark mt-5">
//             {/* Blog  ******************************************************************/}
//             <FormControl className="mb-2 m-auto" isRequired>
//               <FormLabel>Blog</FormLabel>
//               <Textarea
//                 rows="14"
//                 id="blog"
//                 placeholder="Share Your Blog Here"
//                 onChange={handleChange}
//               />
//             </FormControl>

//             <div className="d-flex justify-content-center">
//               <Button
//                 className="btn btn-outline-success mt-4 ms-3"
//                 colorScheme=""
//                 variant=""
//                 size="md"
//                 isLoading={submit}
//                 onClick={handleSubmit}
//               >
//                 Send For Approval
//               </Button>
//             </div>
//             {/* {message == 0
//               ? toast({
//                   title: "Please fill all the fields",
//                   status: "warning",
//                   duration: 3000,
//                   isClosable: true,
//                 })
//               : message == 1
//               ? toast({
//                   title: "Submitted for approval Successfully",
//                   description: "",
//                   status: "success",
//                   duration: 3000,
//                   isClosable: true,
//                 })
//               : message == 2
//               ? toast({
//                   title: "Some Error Occured",
//                   description: "",
//                   status: "error",
//                   duration: 3000,
//                   isClosable: true,
//                 })
//               : ""} */}
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div> */}
