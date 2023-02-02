import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Box from "../components/Box";
import Blogcard from "../components/Blogcard";
import { Button, ButtonGroup, IconButton } from "@chakra-ui/react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";

function Blogs(props) {
  const [data, setData] = useState("");

  useEffect(() => {
    if (data === "") {
      axios.get("/blogs").then((res) => {
        setData(() => {
          let temp = res.data.data;
          temp.reverse();
          return temp;
        });
      });
    }
  });

  return (
    <div className="blog-bg">
      <Navbar {...props} />
      <h1 className="w-3/4 m-auto rounded-3 p-3 text-center display-6 mt-3 mb-5 bg-slate-100">
        Astronomy Blogs
      </h1>
      {data == "" ? (
        <div className="text-center">
          <CircularProgress isIndeterminate className="" color="black" />
        </div>
      ) : (
        <div className="md:p-5 d-block  flex-column justify-content-center  flex-wrap ">
          {data.map((blog, index) => {
            return (
              <div key={index} className="m-1">
                <Blogcard data={blog} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Blogs;
