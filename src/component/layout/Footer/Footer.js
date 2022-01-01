import React from "react";
import playStore from "../../../images/playstore.png";
import Appstore from "../../../images/Appstore.png";
import "./footer.css";
function Footer() {
    return (
        <>
            <footer id="footer">
                <div className="leftFooter">
                    <h4>DOWNLOAD OUR APP</h4>
                    <p>Download App for Android and ISO mobile phone</p>

                    <img src={playStore} alt="playstore" />
                    <img src={Appstore} alt="appstore" />
                </div>
                <div className="midFooter">
                    <h1>Pore Store.</h1>
                    <p>High Quality is our first pripority</p>
                    <p>Copyrights 2021 &copy; MePore</p>
                </div>
                <div className="rightFooter">
                    <h4>Follow us</h4>
                    <a href="">Instagram</a>
                    <a href="">Youtube</a>
                    <a href="">facebook</a>
                </div>
            </footer>
        </>
    );
}

export default Footer;
