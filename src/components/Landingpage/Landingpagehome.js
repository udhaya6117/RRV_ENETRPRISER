import React from "react";
import heroimg from "../../components/img/hero-1.jpg";
import { Button, Container, Divider } from "@mui/material";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import BusinessIcon from "@mui/icons-material/Business";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import logo from "../../components/img/RRV_ENTERPRISE_logo.png";

const Landingpagehome = () => {
  return (
    <div>
      <div className="hero-img">
        <div class="hero-container">
          <h1>Welcome to RRV Enterprise</h1>
          <p>
            At RRV Enterprise, we extend a warm and sincere welcome to you. Step
            into a world of possibilities, innovation, and excellence as we
            introduce you to our wide range of [mention your industry or
            services] solutions.
          </p>
          <button variant="contained" className="btn">
           <span className="readmore">Read more </span> 
          </button>
        </div>
      </div>
      <div id="Aboutus" className="aboutus">
        <div className="sub-title">
          <h2>About Us</h2>
        </div>
        <div style={{ marginLeft: "100px", marginRight: "100px" }}>
          <div className="aboutus-content">
            <div className="aboutus-box-1">
              <p>
                Welcome to RRV Enterprise, your trusted partner in [mention your
                industry or niche]. We're more than just a company; we're a team
                of dedicated professionals with a passion for excellence and a
                commitment to making a difference.
              </p>
              <ul>
                <li>
                  <DoneAllIcon sx={{ color: "#08c3de" }} />
                  <text>
                    Expertise: Our team comprises seasoned professionals with
                    years of experience in [mention your industry]. We have the
                    knowledge and skills to tackle even the most complex
                    challenges.
                  </text>
                </li>
                <li>
                  <DoneAllIcon sx={{ color: "#08c3de" }} />
                  <text>
                    Customer-Centric Approach: Your satisfaction is at the heart
                    of everything we do. We're committed to understanding your
                    unique needs and delivering solutions that exceed your
                    expectations.
                  </text>
                </li>
                <li>
                  <DoneAllIcon sx={{ color: "#08c3de" }} />
                  <text>
                    Innovation: We thrive on innovation. We continuously explore
                    new technologies and strategies to provide you with the most
                    cutting-edge solutions available.
                  </text>
                </li>
              </ul>
            </div>
            <div className="aboutus-box-2">
              <h3>Our Story</h3>
              <p>
                Our journey began in [mention the year of establishment], when a
                group of visionary individuals came together with a common goal
                – to redefine [mention your industry or niche]. What started as
                a small venture has grown into a dynamic enterprise known for
                its innovation, quality, and customer-centric approach.
              </p>
              <button variant="contained" className="btn">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="Our-Services" className="Our-Services">
        <div style={{ marginLeft: "100px", marginRight: "100px" }}>
          <div className="Our-Services-divide">
            <div className="our-service-box-1">
              <div className="center-box-severice">
              <div className="services-header">
                <h2>Our Services</h2>
              </div>
              <p>
                At RRV Enterprise, we offer a comprehensive suite of services
                designed to meet your diverse needs and help you achieve your
                goals. With a focus on innovation, quality, and customer
                satisfaction, we provide the following services
              </p>
              </div>
            </div>
            <div className="our-service-box-2">
              <div className="our-service-box-2-content">
                <div className="service-content-1">
                  <div>
                    <section>
                      <BusinessIcon
                        className="service-icon"
                        sx={{
                          padding: "20px",
                          borderRadius: "50px",
                          fontSize: "45px",
                          color: "#08c3de",
                        }}
                      />
                      <h3>Expertise</h3>
                      <p>
                        Our team of professionals is highly skilled and
                        experienced in [mention the relevant field].
                      </p>
                    </section>
                  </div>
                  <div>
                    <section>
                      <ContentPasteIcon
                        className="service-icon"
                        sx={{
                          padding: "20px",
                          borderRadius: "50px",
                          fontSize: "45px",
                          color: "#08c3de",
                        }}
                      />
                      <h3>Customization</h3>
                      <p>
                        We understand that one size doesn't fit all. Our
                        services are tailored to your unique requirements,
                      </p>
                    </section>
                  </div>
                </div>
                <div className="service-content-2">
                  <div>
                    <section>
                      <ShowChartIcon
                        className="service-icon"
                        sx={{
                          padding: "20px",
                          borderRadius: "50px",
                          fontSize: "45px",
                          color: "#08c3de",
                        }}
                      />
                      <h3>Quality Assurance</h3>
                      <p>
                        We maintain rigorous quality control standards to
                        guarantee the excellence of our services.
                      </p>
                    </section>
                  </div>
                  <div>
                    <section>
                      <EqualizerIcon
                        className="service-icon"
                        sx={{
                          padding: "20px",
                          borderRadius: "50px",
                          fontSize: "45px",
                          color: "#08c3de",
                        }}
                      />
                      <h3>Timely Delivery</h3>
                      <p>
                        We value your time and strive to deliver our services on
                        schedule, without compromising on quality
                      </p>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
        <div style={{ padding: "10px 55px" }}>
          <Divider sx={{ borderColor: "#093339" }} />
          <div style={{ textAlign: "center" }}>
            <p>&#169; Copyright RRV Enterprise.All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpagehome;
