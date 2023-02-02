import React, { useEffect, useState } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Badge,
} from "@chakra-ui/react";
import { Tooltip } from "@chakra-ui/react";

import { Link } from "react-router-dom";

import axios from "axios";

function Box(props) {
  // let address = "/showexp/" + props.data._id;
  const [submit, setSubmit] = useState(false);

  function handleApprove() {
    setSubmit(true);
    axios
      .post("/approve", null, {
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
      .post("/reject", null, {
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
    <div></div>
    // <div className="row box-2 border rounded-4 p-4 m-auto black-box">
    //   <div className="col col-lg-6">
    //     <h5 className="card-title big ">
    //       {/* {props.data.title}{" "} */}
    //       <Badge
    //         className="p-2 border border-light rounded-3"
    //         colorScheme="green"
    //       >
    //         ASTRO
    //       </Badge>
    //     </h5>
    //   </div>
    //   <div className="col col-lg-6">
    //     <h6 className="card-subtitle mb-3 readable-low ">
    //       {/* Name : {props.data.name} */}
    //     </h6>
    //     <h6 className="card-subtitle mb-3 readable-low">
    //       {/* Date : <span className="">{props.data.date}</span> */}
    //     </h6>
    //     <h6 className="card-subtitle mb-3 readable-low">
    //       {/* Time : <span className="">{props.data.time}</span> */}
    //     </h6>

    //     <Link to="/">
    //       <Button
    //         colorScheme="cyan"
    //         className="mt-2"
    //         variant="solid"
    //         size="md"
    //         width="75%"
    //       >
    //         Read More
    //       </Button>
    //     </Link>
    // {!props.data.isApproved ? (
    //   <>
    //     <Button
    //       colorScheme=""
    //       className="btn btn-lg btn-success card-link mt-2"
    //       variant=""
    //       size="md"
    //       width="100%"
    //       onClick={handleApprove}
    //       isLoading={submit}
    //     >
    //       Approve
    //     </Button>
    //     <Button
    //       colorScheme=""
    //       className="btn btn-lg btn-danger card-link mt-2"
    //       variant=""
    //       size="md"
    //       width="100%"
    //       onClick={handleReject}
    //       isLoading={submit}
    //     >
    //       Reject
    //     </Button>
    //   </>
    // ) : (
    //   ""
    // )}
    //   </div>
    // </div>
  );
}

export default Box;
