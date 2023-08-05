import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

const Footer=()=>{
    return(
        <div className="footer">
            <div className="sb_footer section_padding">
                <div className= "sb_footer-links">
                    <div className= "sb_footer-links_div">
                      <h4>Resources</h4>
                        <a href="/resource">
                            <p>Resource center</p>
                        </a>
                        <a href="/testimonials">
                            <p>Testimonials</p>
                        </a>
                        <a href="/help">
                            <p>FAQ'S</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div">
                      <h4>More</h4>
                        <a href="/blog">
                            <p>Our Blog</p>
                        </a>
                        <a href="/center">
                            <p>Press Center</p>
                        </a>
                        <a href="/fare">
                            <p>Low Fare Tips</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div">
                      <h4>Patners</h4>
                        <a href="/employer">
                            <p>TT devs</p>
                        </a>
                    </div>  
                    <div className="sb_footer-links_div">
                      <h4>Company</h4>
                        <a href="/about">
                            <p>About</p>
                        </a>
                        <a href="/press">
                            <p>Press</p>
                        </a>
                        <a href="/career">
                            <p>Career</p>
                        </a>
                        <a href="/contacts">
                            <p>Contact</p>
                        </a>
                    </div>  
                    <div className="sb_footer-links_div">
                        <h4>Coming soon on</h4>
                       <div class="social-container">
                           <a href="https://www.youtube.com"
                                className="youtube social">
                                  <FontAwesomeIcon icon={faYoutube} size="2x" />
                           </a>
                           <a href="https://www.facebook.com"
                                className="facebook social">
                                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                           </a>
                           <a href="https://www.twitter.com" 
                                className="twitter social">
                                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                           </a>
                           <a href="https://www.instagram.com"
                                className="instagram social">
                                 <FontAwesomeIcon icon={faInstagram} size="2x" />
                           </a>
                       </div>
                    </div>

         <hr></hr>
                    <div className="sb_footer-below">
                      <div className="sb_footer-copyright">
                            <p>
                                @{new Date().getFullYear()} TravelTrove. All right reserved.
                            </p>
                      </div>
                       <div className="sb_footer-below-links">
                         <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                         <a href="/privacy"><div><p>Privacy</p></div></a>
                         <a href="/security"><div><p>Security</p></div></a>
                         <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
                       </div>
                      </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Footer;