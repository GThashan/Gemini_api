import React, { useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
function Sidebar() {
  const [show, setshow] = useState(false);
  return (
    <div className="sidebar">
      <div className="top">
        
        <img src={assets.menu_icon} alt="" className="menu" onClick={(e)=>setshow(prev=>!prev)}/>
        <div className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {show ? <p>New chat</p> : null}
        </div>
        {show ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <img src={assets.message_icon} alt="" />
              <p>What is react ....</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bootom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {show ? <p>Help</p> : null}
        </div>
        <div className="bootom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {show ? <p>Activity</p> : null}
        </div>
        <div className="bootom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {show ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
