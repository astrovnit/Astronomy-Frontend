import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { Button } from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import { Skeleton } from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react'
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Showblog(props) {
  const { id } = useParams();
  const [data, setData] = useState("");
  const [isLoading,setLoading]=useState(false);
  const [message,setMessage]=useState(-1);
  var link=window.location.href;
  const toast = useToast()
  async function handleClick(){
    setLoading(true);
    
    await navigator.clipboard.writeText(link);
    setMessage(1);
    setLoading(false);
  }
  useEffect(() => {
    setMessage(-1);
    if (data === "") {
      axios
        .get("/getData", {
          params: {
            id: id,
          },
        })
        .then((res) => {
          setData(res.data[0]);
          console.log(res.data[0]);
        });
    }
  });

  return (
    <div className="blog-bg">
      <Navbar {...props} />
      {/* <div className="w-5/6 bg-dark text-light text-3xl p-5 rounded-2 text-center mt-3 m-auto">
        BLOG
      </div> */}
      {data == "" ? (
        <div className="w-3/4 m-auto">
          <br />
          <Skeleton height="90px" />
          <br />
          <Skeleton height="90px" />
          <br />
          <Skeleton height="90px" />
          <br />
          <Skeleton height="90px" />
          <br />
          <Skeleton height="90px" />
        </div>
      ) : (
        <div className="w-5/6 md:w-3/4 bg-slate-50 shadow-2xl border m-auto p-5 rounded-2 mt-5">
          <div className="flex">
            <p className="font-bold text-4xl">{data.title} </p>
            
          </div>
          <div className="mt-1 text-lg">
            <p className="">
              By <span className="text-blue-500">{data.name}</span>
            </p>
            <p className="d-inline ">
              {" "}
              {data.date} at {data.time}
            </p>
            <p className="md:m-4 d-inline">
              <Button onClick={handleClick} isLoading={isLoading} className="" colorScheme="linkedin">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-share-fill me-2"
                  viewBox="0 0 20 20"
                >
                  <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />
                </svg>
                Share
              </Button>
            </p>
          </div>
          <hr className="bg-gradient-to-r from-blue-900 to-blue-900 h-1 mt-4" />
          <div className="mt-5 text-xl whitespace-pre-line">{data.blog}</div>
          {message == 1?(toast({
          title: 'Link Copied To Clipboard',
          duration: 3000,
          isClosable: true,
        })):""}
        </div>
      )}
    </div>
  );
}

export default Showblog;
