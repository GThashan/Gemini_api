import React from "react";
import { assets } from "../../assets/assets";
import "./Main.css";

function Main() {
  return (
    <div className="main">
      <div className="main-head">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="main-body">
        <div className="body-top">
          <p>
            <span>Hello, Joy</span>
          </p>
          <p>How can I help you today?</p>
        </div>
        <div className="body-bottom">
          <div className="cards">
            <div className="card">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Maxime, iste?
              </p>
              <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Maxime, iste?
              </p>
              <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Maxime, iste?
              </p>
              <img src={assets.code_icon} alt="" />
            </div>
            <div className="card">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Maxime, iste?
              </p>
              <img src={assets.message_icon} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="main-bottom">
        <div className="input-feild">
            <input type="text" placeholder="Enter your mesage"/>
            <div className="input-img">
            <img src={assets.gallery_icon} alt="" />
            <img src={assets.mic_icon} alt="" />
            <img src={assets.send_icon} alt="" /> 
            </div>
            
        </div>
      </div>
    </div>
  );
}

export default Main;
