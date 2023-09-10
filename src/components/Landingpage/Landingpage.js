import React from "react";
import "../../components/Landingpage/Landingpage.css";
import Landingpageheader from "./Landingpageheader";
import Landingpagecontent from "./Landingpagecontent";
import { Outlet } from "react-router-dom";


const Landingpage = () => {
  return (
    <div>
      <div className="fixed-header">
        <Landingpageheader />
      </div>
      <div className="content-box">
       <Outlet />
      </div>
    </div>
  );
};

export default Landingpage;
