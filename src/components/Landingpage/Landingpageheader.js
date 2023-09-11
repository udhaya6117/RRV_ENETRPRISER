import * as React from "react";
import { useState, useEffect } from "react";
import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import logo from "../img/RRV_ENTERPRISE_logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTINGDATA } from "../../ROUTINGDATA";

const Landingpageheader = () => {
  const Navigate = useNavigate();
  const [background, setbackground] = useState("#030d16");
  const [boxshadow, setboxshadow] = useState(
    "0px 0px 8px 2px rgba(10, 68, 122, 0.7)"
  );
  console.log("background", background);

  const [scrolling, setScrolling] = useState(false);

  const location = useLocation();
  const curreturl = location.pathname;

  // useEffect(() => {

  //   const handleScroll = () => {
  //   console.log("first1")
  //   const currentScrollPosition =
  //     document.documentElement.scrollTop || document.body.scrollTop;
  //     console.log("currentScrollPosition",currentScrollPosition)
  //     if (currentScrollPosition > 0) {
  //       console.log("first2")
  //       setbackground("transparent"); // Change the header background color to transparent when at the top
  //       setboxshadow("0px 0px 8px 2px rgba(10, 68, 122, 0.7)");
  //     } else if (currentScrollPosition === 0) {
  //       console.log("sec")
  //       setbackground("#030d16"); // Change the header background color to blue when scrolled down
  //       setboxshadow("none");
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll());
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll());
  //   };
  // }, []);
  console.log("scroll", window.scrollY);
  useEffect(() => {
    const handleScroll = () => {
      console.log("Scrolling");
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const boxshadowlanding = {
  //   boxShadow: boxshadow,
  //   padding: "0px 10px",
  //   backgroundColor: background,
  //   transition: "0.3s",
  //   position: "sticky",
  //   top: 0,
  // };

  return (
    <div>
      <AppBar
        position="static"
        className={
          curreturl === ROUTINGDATA.LAND + ROUTINGDATA.LANDINGPAGECONTENT
            ? "headerbackground"
            : scrolling
            ? "headerbackground"
            : "headerbackground-a"
        }
      >
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
