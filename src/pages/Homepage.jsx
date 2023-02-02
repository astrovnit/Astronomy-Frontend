import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Button, ButtonGroup, IconButton } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import axios from "axios";
function Homepage(props) {
  return (
    <div>
      <Navbar {...props} />

      <div className="text flex flex-row">
        <div className="text hidden lg:block font-bold mt-20 mx-0">
          <p className="p-10 mx-10 xl:text-5xl text-2xl text-indigo-900">
            Space Talk
          </p>

          <p className="px-10 mx-10 xl:text-5xl text-2xl mb-10 text-indigo-900">
            Star Gazzing
          </p>

          <a
            href="#check"
            className="mx-20 px-2  rounded-xl p-3 mt-4 xl:text-4xl text-xl text-fuchsia-700"
          >
            {" "}
            <span className="underline"> Explore More </span>{" "}
          </a>
        </div>
        <div className="homeImage lg:w-2/3 m-auto">
          <img src="../home2.jpeg" alt="" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row border border-slate-50 p-5">
        <div className="lg:w-1/2 w-6/7 m-auto">
          <img src="../../home1.jpg" />
        </div>
        <div className="lg:w-1/2 w-6/7 m-auto">
          <div className="container  lg:px-10 m p-6 shadow-lg rounded-lg  shadow-gray-300 text-gray-700">
            <p className="font-bold text-2xl text-center">Who We Are</p>
            <br />
            <p>
              <p className="text-center">
                Not only do we live among the stars, the stars live within us!
              </p>
              <br></br>
              Barely any of us have come across that jaw-dropping, dark patch of
              sky, covered in thousands of tiny bright specks, that has left us
              transfixed. We, city dwellers, know nothing about what our home
              galaxy looks like, let alone the universe! Intrigued to know what
              it looks like? You've come to the right place!
              <br />
              <br />
              {/* Ashlesha Astronomy Club (AAC) is an association of astronomy
              enthusiasts, who share a collective objective of spreading
              knowledge about the cosmos in the society. Ever since its
              inception back in 2012, AAC has been successfully conducting
              astronomy outreach events and overnight stargazing programs in and
              around the vicinities of Mumbai and Pune. Along with being
              equipped with skilled members and quality gadgets, our club has
              also been actively raising awareness about myths and
              misconceptions related to astronomy, especially in the rural
              areas. AAC functions with a vision of reaching out to maximum
              number of people from all age groups and overcoming its
              geographical barriers.
  <br />*/}
              We, at the AAC, would love to host you at one of our stargazing
              events. Come, take a tour through the night sky along with us and
              experience a totally different world that exists beyond us!
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row border border-slate-50 p-5">
        <div className="lg:w-1/2 w-6/7 m-auto">
          <div className="container  lg:px-10 m p-6 shadow-lg rounded-lg  shadow-gray-300 text-gray-700">
            <p className="font-bold text-2xl text-center">Who We Are</p>
            <br />
            <p>
              <p className="text-center">
                Not only do we live among the stars, the stars live within us!
              </p>
              <br></br>
              Barely any of us have come across that jaw-dropping, dark patch of
              sky, covered in thousands of tiny bright specks, that has left us
              transfixed. We, city dwellers, know nothing about what our home
              galaxy looks like, let alone the universe! Intrigued to know what
              it looks like? You've come to the right place!
              <br />
              <br />
              {/* Ashlesha Astronomy Club (AAC) is an association of astronomy
              enthusiasts, who share a collective objective of spreading
              knowledge about the cosmos in the society. Ever since its
              inception back in 2012, AAC has been successfully conducting
              astronomy outreach events and overnight stargazing programs in and
              around the vicinities of Mumbai and Pune. Along with being
              equipped with skilled members and quality gadgets, our club has
              also been actively raising awareness about myths and
              misconceptions related to astronomy, especially in the rural
              areas. AAC functions with a vision of reaching out to maximum
              number of people from all age groups and overcoming its
              geographical barriers.
  <br />*/}
              We, at the AAC, would love to host you at one of our stargazing
              events. Come, take a tour through the night sky along with us and
              experience a totally different world that exists beyond us!
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 w-6/7 m-auto">
          <img src="../../home1.jpg" />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
