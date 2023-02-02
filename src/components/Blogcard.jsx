import React, { useState } from "react";
import { Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import axios from "axios";
const Blogcard = (props) => {
  let width = window.innerWidth;
  let address = "/showblog/" + props.data._id;
  const [submit, setSubmit] = useState(false);
  console.log(props);
  function handleApprove() {
    setSubmit(true);
    axios
      .post("https://astrovnit.onrender.com/approve", null, {
        params: {
          id: props.data._id,
        },
      })
      .then((res) => {
        props.setData(res.data.data);
        props.setMessage(res.data.message);
        setSubmit(false);
      });
  }
  function handleReject() {
    setSubmit(true);
    axios
      .post("https://astrovnit.onrender.com/reject", null, {
        params: {
          id: props.data._id,
        },
      })
      .then((res) => {
        props.setData(res.data.data);
        props.setMessage(res.data.message);
        setSubmit(false);
      });
  }
  return (
    <div class="flex justify-center  w-full">
      <div class="transition ease-in-out hover:scale-105 delay-250 w-3/4  rounded-md p-5 px-6 mb-5 bg-white shadow-lg hover:shadow-2xl hover:shadow-slate-300">
        <a href="#">
          <h5 class="big mb-1 font-bold tracking-tight text-[#241e1e]">
            {props.data.title}
          </h5>
        </a>
        <p class="mb-2 text-lg text-blue-600">
          {props.data.name}, {props.data.date} {props.data.time}
        </p>
        <p class=" font-normal text-[#241e1e]">
          {width > 800
            ? props.data.blog.slice(0, 700)
            : props.data.blog.slice(0, 300)}
          .........
        </p>
        <div className="flex flex-col md:flex-row justify-end ">
          <Link to={address}>
            <Button
              rightIcon={<ArrowForwardIcon />}
              colorScheme="blue"
              className="mt-2 w-full"
              variant="solid"
            >
              Read More
            </Button>
          </Link>
          {!props.data.isApproved ? (
            <>
              <Button
                colorScheme="green"
                variant="solid"
                className="mt-2 md:mx-2"
                onClick={handleApprove}
                isLoading={submit}
              >
                Approve
              </Button>
              <Button
                colorScheme="red"
                className="mt-2 md:mx-2"
                variant="solid"
                onClick={handleReject}
                isLoading={submit}
              >
                Reject
              </Button>
            </>
          ) : (
            ""
          )}
          </div>
     
      </div>
    </div>
  );
};

export default Blogcard;
