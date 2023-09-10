import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import React from "react";
import logo from "../img/RRV_ENTERPRISE_logo.png";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { ROUTINGDATA } from "../../ROUTINGDATA";


const Landingpageheader = () => {
  const Navigate = useNavigate();
  
  const location = useLocation();
  const curreturl = location.pathname;
  
  return (
    <div>
      <AppBar
        position="static"
        className="boxshadowlanding"
        sx={{
          backgroundColor: "#030d16",
          transition: "0.3s",
          position: "sticky",
          top: 0,
        }}
      >
        <Toolbar>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",padding:"0px 30px"}}>
            <Typography variant="h6" component="div">
              <div className="landingpageheaderlogo">
                <img src={logo} alt="logo" />
              </div>
            </Typography>
            <div className="linkbtn">
               <div className={curreturl === ROUTINGDATA.LAND + ROUTINGDATA.LANDINGPAGEHOME ? "btn-link-a":"btn-link"}>
                 <span onClick={()=>{
                  Navigate(ROUTINGDATA.LANDINGPAGEHOME);
                 }}>Home</span>
               </div>
               <div className="btn-link">
                 <span>Services</span>
               </div>
               <div className={curreturl === ROUTINGDATA.LAND + ROUTINGDATA.LANDINGPAGECONTENT ? "btn-link-a":"btn-link"}>
                 <span onClick={()=>{
                  Navigate(ROUTINGDATA.LANDINGPAGECONTENT);
                 }}>Products</span>
               </div>
            </div>
            <div className="reg-btn">
              <button>Reg now</button>
            </div>
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Landingpageheader;
