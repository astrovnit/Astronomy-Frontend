import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Box from "../components/Box";
import { Button, ButtonGroup, IconButton } from "@chakra-ui/react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import Blogcard from "../components/Blogcard";
function Dashboard(props) {
  const [message, setMessage] = useState(-1);
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const toast = useToast();
  useEffect(() => {
    setMessage(-1);
    if (data == null) {
      axios.get("https://astrovnit.onrender.com/pending").then((res) => {
        setData(res.data.data);
      });
    }
    if (!props.user.isAdmin) {
      navigate("/login");
    }
  });

  return (
    <div className="">
      <Navbar {...props} />
      <h1 className="text-center text-3xl bg-slate-900 mt-3 w-3/4 m-auto rounded p-4 text-white">
        Pending Approvals{" "}
      </h1>
      {data == "" ? (
        <h1 className="text-center text-xl mt-4">NO RECORDS FOUND</h1>
      ) : (
        <div className="d-block  flex-column justify-content-center  flex-wrap">
          {data?.map((blog, index) => {
            return (
              <div key={index} className="m-3">
                <Blogcard
                  data={blog}
                  setData={setData}
                  setMessage={setMessage}
                />
              </div>
            );
          })}
        </div>
      )}

      {message == 0
        ? toast({
            title: "Some Error Occured",
            description: "Please Try Again",
            status: "error",
            duration: 3000,
            isClosable: true,
          })
        : message == 1
        ? toast({
            title: "Approved Successfully",
            description: "",
            status: "success",
            duration: 3000,
            isClosable: true,
          })
        : message == 2
        ? toast({
            title: "Rejected",
            description: "",
            status: "error",
            duration: 3000,
            isClosable: true,
          })
        : ""}
    </div>
  );
}

export default Dashboard;
