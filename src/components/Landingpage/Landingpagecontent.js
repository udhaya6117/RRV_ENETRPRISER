import { Container, Divider } from "@mui/material";
import React, { useState } from "react";
import product_1 from "../img/product-1.jpg";
import Rating from "@mui/material/Rating";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import ListSubheader from '@mui/material/ListSubheader';
import CommentIcon from '@mui/icons-material/Comment';


const Landingpagecontent = () => {
  const [checked, setChecked] = React.useState([0]);
  const [listvalue ,setlistvalue] = useState([
    "Apple","Acer","fujitsu","compaac","Dell","Toshiba","hp","IBM","Sony","LG","samsung","Lenovo"
  ])

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

  return (
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
        </div>
        <div className="checkbox-product">
          <div className="selection-box">
          <div className="filters">Filters</div>
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
              subheader={<ListSubheader sx={{fontSize:"17px",color:"black",fontFamily:"Poppins-SemiBold",position:"relative"}}>Products</ListSubheader>}
            >
              {listvalue.map((value) => {
                const labelId = `checkbox-list-label-${value}`;
                
                return (
                
                  <ListItem
                    key={value}
                    secondaryAction={
                      <IconButton edge="end"  aria-label="comments">
                        
                      </IconButton>
                    }
                    disablePadding
                  >
                    <ListItemButton
                      role={undefined}
                      onClick={handleToggle(value)}
                      dense
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
                        sx={{width:"185px"}}
                      />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Landingpagecontent;
