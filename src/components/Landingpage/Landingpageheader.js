import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import logo from "../img/RRV_ENTERPRISE_logo.png";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { ROUTINGDATA } from "../../ROUTINGDATA";

const Landingpageheader = () => {
  const Navigate = useNavigate();
  const [background, setbackground] = useState("#030d16");
  const [boxshadow, setboxshadow] = useState(
    "0px 0px 8px 2px rgba(10, 68, 122, 0.7)"
  );

  const [scrolling, setScrolling] = useState(false);

  const location = useLocation();
  const curreturl = location.pathname;

  useEffect(() => {
    // Add a scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Check the scroll position and set scrolling state accordingly
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const boxshadowlanding = {
    boxShadow: boxshadow,
    padding: "0px 10px",
    backgroundColor: background,
    transition: "0.3s",
    position: "sticky",
    top: 0,
  };

  return (
    <div>
      <AppBar position="static" sx={{
         boxShadow: boxshadow,
         padding: "0px 10px",
         backgroundColor: background,
         transition: "0.3s",
         position: "sticky",
         top: 0,
      }}>
        <Toolbar>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              padding: "0px 30px",
            }}
          >
            <Typography variant="h6" component="div">
              <div className="landingpageheaderlogo">
                <img src={logo} alt="logo" />
              </div>
            </Typography>
            <div className="linkbtn">
              <div
                className={
                  curreturl === ROUTINGDATA.LAND + ROUTINGDATA.LANDINGPAGEHOME
                    ? "btn-link-a"
                    : "btn-link"
                }
              >
                <span
                  onClick={() => {
                    Navigate(ROUTINGDATA.LANDINGPAGEHOME);
                  }}
                >
                  Home
                </span>
              </div>
              <div className="btn-link">
                <span>Services</span>
              </div>
              <div
                className={
                  curreturl ===
                  ROUTINGDATA.LAND + ROUTINGDATA.LANDINGPAGECONTENT
                    ? "btn-link-a"
                    : "btn-link"
                }
              >
                <span
                  onClick={() => {
                    Navigate(ROUTINGDATA.LANDINGPAGECONTENT);
                  }}
                >
                  Products
                </span>
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
