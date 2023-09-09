import { Container, Divider } from "@mui/material";
import React, { useState } from "react";
import product_1 from "../img/product-1.jpg";
import product_2 from "../img/products-2.jpg";
import product_3 from "../img/products-3.jpg";
import Rating from "@mui/material/Rating";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import ListSubheader from "@mui/material/ListSubheader";
import CommentIcon from "@mui/icons-material/Comment";
import Pagination from "@mui/material/Pagination";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import logo from "../../components/img/RRV_ENTERPRISE_logo.png"

const Landingpagecontent = () => {
  const [checked, setChecked] = React.useState([0]);
  const [more, setless] = useState(5);
  const [listvalue, setlistvalue] = useState([
    "Apple",
    "Acer",
    "fujitsu",
    "compaac",
    "Dell",
    "Toshiba",
    "hp",
    "IBM",
    "Sony",
    "LG",
    "samsung",
    "Lenovo",
  ]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const allLoadMore = () => {
    setless(more + 7);
  };

  const allLoadLess = () => {
    setless(more - 7);
  };

  return (
    <>
      <Container>
        <div className="landingpagecontent">
          <div className="side-products ">
            <div className="titile-side-products">
              <p>200 + Options</p>
              <h1>Recommendede Products </h1>
            </div>
            <Divider sx={{ borderColor: "#b4b6b7" }} />
            <div
              style={{ marginTop: "20px", marginBottom: "20px" }}
              className="products_display"
            >
              <div className="product-box">
                <img src={product_1} alt="product1" />
              </div>
              <div className="product-box-content">
                <p>Expand Your World</p>
                <h3>ASUS Vivobook X556UQ</h3>
                <p>ASUS in search of incredible</p>
                <div className="product-list">
                  <ul>
                    <li>Intel Core i3 Processor</li>
                    <li>8GB DDR4 RAM</li>
                    <li>64 bit Windows 11 Operating System</li>
                    <li>512 GB SSD</li>
                    <li>39.62 cm (15.6 Inch) Display</li>
                    <li>1 Year onsite Warranty</li>
                  </ul>
                </div>
                <div style={{ paddingLeft: "19px" }}>
                  <Rating name="size-small" defaultValue={4} size="small" />
                </div>
              </div>
            </div>
            <Divider sx={{ borderColor: "#b4b6b7" }} />
            <div
              style={{ marginTop: "20px", marginBottom: "20px" }}
              className="products_display"
            >
              <div className="product-box">
                <img src={product_2} alt="product1" />
              </div>
              <div className="product-box-content">
                <p>Expand Your World</p>
                <h3>ASUS Vivobook X556UQ</h3>
                <p>ASUS in search of incredible</p>
                <div className="product-list">
                  <ul>
                    <li>Intel Core i3 Processor</li>
                    <li>8GB DDR4 RAM</li>
                    <li>64 bit Windows 11 Operating System</li>
                    <li>512 GB SSD</li>
                    <li>39.62 cm (15.6 Inch) Display</li>
                    <li>1 Year onsite Warranty</li>
                  </ul>
                </div>
                <div style={{ paddingLeft: "19px" }}>
                  <Rating name="size-small" defaultValue={4} size="small" />
                </div>
              </div>
            </div>
            <Divider sx={{ borderColor: "#b4b6b7" }} />
            <div
              style={{ marginTop: "20px", marginBottom: "20px" }}
              className="products_display"
            >
              <div className="product-box">
                <img src={product_3} alt="product1" />
              </div>
              <div className="product-box-content">
                <p>Expand Your World</p>
                <h3>ASUS Vivobook X556UQ</h3>
                <p>ASUS in search of incredible</p>
                <div className="product-list">
                  <ul>
                    <li>Intel Core i3 Processor</li>
                    <li>8GB DDR4 RAM</li>
                    <li>64 bit Windows 11 Operating System</li>
                    <li>512 GB SSD</li>
                    <li>39.62 cm (15.6 Inch) Display</li>
                    <li>1 Year onsite Warranty</li>
                  </ul>
                </div>
                <div style={{ paddingLeft: "19px" }}>
                  <Rating name="size-small" defaultValue={4} size="small" />
                </div>
              </div>
            </div>
          </div>
          <div className="checkbox-product">
            <div className="selection-box">
              <div className="filters">Filters</div>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
                subheader={
                  <ListSubheader
                    sx={{
                      fontSize: "17px",
                      color: "black",
                      fontFamily: "Poppins-SemiBold",
                      position: "relative",
                    }}
                  >
                    Products
                  </ListSubheader>
                }
              >
                {listvalue.slice(0, more).map((value) => {
                  const labelId = `checkbox-list-label-${value}`;

                  return (
                    <ListItem
                      key={value}
                      secondaryAction={
                        <IconButton
                          edge="end"
                          aria-label="comments"
                        ></IconButton>
                      }
                      disablePadding
                    >
                      <ListItemButton
                        role={undefined}
                        onClick={handleToggle(value)}
                        dense
                        sx={{
                          paddingTop: "0px",
                        }}
                      >
                        <ListItemIcon>
                          <Checkbox
                            edge="start"
                            checked={checked.indexOf(value) !== -1}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ "aria-labelledby": labelId }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          id={labelId}
                          primary={value}
                          sx={{ width: "185px" }}
                        />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
              <p className="more-option">
                {more > 5 && (
                  <div className="load-more">
                    <span onClick={allLoadLess}>Less</span>
                  </div>
                )}
                {more < listvalue.length && (
                  <div className="load-more">
                    <span onClick={allLoadMore}>MORE</span>
                  </div>
                )}
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "30px 0px",
          }}
        >
          <Pagination count={10} color="primary" />
        </div>
      </Container>
      <div id="footer" className="footer">
        <div className="footer-content">
          <div className="footer-box-1">
            <div className="adress-content">
              <h3>RRV ENTERPRISE</h3>
              <p>
                At RRV Enterprise, we're dedicated to excellence.we deliver
                innovative solutions that drive success.
              </p>
              <address style={{ width: "200px" }}>
                977,vinayagapuram 3rd street, Kattupakkam , Chennai ,
                Thiruvalluvar, Tamil Nadu - 600056
              </address>
              <p>
                <text>
                  <span style={{ color: "#08c3de" }}>Phone: </span> 9444081629
                </text>
              </p>
              <div className="footer-icon">
                <div>
                  <TwitterIcon
                    className="icon-footer"
                    sx={{
                      color: "white",
                      padding: "10px",
                      fontSize: "22px",
                      backgroundColor: "#0e1f2f",
                    }}
                  />
                </div>
                <div>
                  <YouTubeIcon
                    className="icon-footer"
                    sx={{
                      color: "white",
                      padding: "10px",
                      fontSize: "22px",
                      backgroundColor: "#0e1f2f",
                    }}
                  />
                </div>
                <div>
                  <FacebookIcon
                    className="icon-footer"
                    sx={{
                      color: "white",
                      padding: "10px",
                      fontSize: "22px",
                      backgroundColor: "#0e1f2f",
                    }}
                  />
                </div>
                <div>
                  <InstagramIcon
                    className="icon-footer"
                    sx={{
                      color: "white",
                      padding: "10px",
                      fontSize: "22px",
                      backgroundColor: "#0e1f2f",
                    }}
                  />
                </div>
                <div>
                  <LinkedInIcon
                    className="icon-footer"
                    sx={{
                      color: "white",
                      padding: "10px",
                      fontSize: "22px",
                      backgroundColor: "#0e1f2f",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="footer-box-2">
            <div className="header-footer">
              <h3>Usefull Links</h3>
            </div>
            <div className="links-name">
              <ArrowForwardIosIcon
                sx={{
                  fontSize: 12,
                  marginTop: "3px",
                  fontWeight: "800",
                  color: "#0894aa",
                }}
              />
              <text>Home</text>
            </div>
            <div className="links-name">
              <ArrowForwardIosIcon
                sx={{
                  fontSize: 12,
                  marginTop: "3px",
                  fontWeight: "800",
                  color: "#0894aa",
                }}
              />
              <text>About Us</text>
            </div>
            <div className="links-name">
              <ArrowForwardIosIcon
                sx={{
                  fontSize: 12,
                  marginTop: "3px",
                  fontWeight: "800",
                  color: "#0894aa",
                }}
              />
              <text>Service</text>
            </div>
            <div className="links-name">
              <ArrowForwardIosIcon
                sx={{
                  fontSize: 12,
                  marginTop: "3px",
                  fontWeight: "800",
                  color: "#0894aa",
                }}
              />
              <text>Terms of service</text>
            </div>
            <div className="links-name">
              <ArrowForwardIosIcon
                sx={{
                  fontSize: 12,
                  marginTop: "3px",
                  fontWeight: "800",
                  color: "#0894aa",
                }}
              />
              <text>Privacy policy</text>
            </div>
          </div>
          <div className="footer-box-3">
            <div className="header-footer">
              <h3>Our Service</h3>
            </div>
            <div className="links-name">
              <ArrowForwardIosIcon
                sx={{
                  fontSize: 12,
                  marginTop: "3px",
                  fontWeight: "800",
                  color: "#0894aa",
                }}
              />
              <text>Marketing</text>
            </div>
            <div className="links-name">
              <ArrowForwardIosIcon
                sx={{
                  fontSize: 12,
                  marginTop: "3px",
                  fontWeight: "800",
                  color: "#0894aa",
                }}
                />
                <text>Product Management</text>
            </div>
            <div className="links-name">
              <ArrowForwardIosIcon
                sx={{
                  fontSize: 12,
                  marginTop: "3px",
                  fontWeight: "800",
                  color: "#0894aa",
                }}
              />
              <text>Service</text>
            </div>
            <div className="links-name">
              <ArrowForwardIosIcon
                sx={{
                  fontSize: 12,
                  marginTop: "3px",
                  fontWeight: "800",
                  color: "#0894aa",
                }}
              />
              <text>Terms of service</text>
            </div>
            <div className="links-name">
              <ArrowForwardIosIcon
                sx={{
                  fontSize: 12,
                  marginTop: "3px",
                  fontWeight: "800",
                  color: "#0894aa",
                }}
              />
              <text>Privacy policy</text>
            </div>
          </div>
          <div className="footer-box-4">
              <div className="logo-box-footer">
              <img src={logo} alt="logo" />
              </div>
          </div>
        </div>
        <div style={{padding:"10px 55px"}}>
        <Divider sx={{borderColor:"#093339"}} />
        <div style={{textAlign:"center"}}>
          <p>&#169; Copyright RRV Enterprise.All Rights Reserved</p>
          
        </div>
        </div>
      </div>
    </>
  );
};

export default Landingpagecontent;
