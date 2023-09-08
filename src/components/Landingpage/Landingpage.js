import React from "react";
import "../../components/Landingpage/Landingpage.css";
import Landingpageheader from "./Landingpageheader";
import Landingpagecontent from "./Landingpagecontent";


const Landingpage = () => {
  return (
    <div>
      <div className="fixed-header">
        <Landingpageheader />
      </div>
      <div>
       <Landingpagecontent />
      </div>
    </div>
  );
};

export default Landingpage;
