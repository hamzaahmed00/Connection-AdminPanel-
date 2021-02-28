import React from "react";
import "./sidebar.css";
import logo from "../../assets/logo.png";
import profile from "../../assets/profle.jpg";
import Avatar from 'react-avatar';



const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar__responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          {/* <img className='sideImg' src={profile} alt="logo" />
           */}
           <Avatar className='sideImg' name='profile' round={true} src={profile} size="50"/>
          <h1>Yahya</h1>
        </div>
        <i
          className="fa fa-times"
          id="sidebarIcon"
          onClick={() => closeSidebar()}
        ></i>
      </div>
      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-home"></i>
          <a href="#">Dashboard</a>
        </div>
        <h2>MNG</h2>
        <div className="sidebar__link">
          <i className="fa fa-address-card-o" aria-hidden="true"></i>
          <a href="#">Add Admin</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-building-o"></i>
          <a href="#">Exams</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-check"></i>
          <a href="#">Votes</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-tasks"></i>
          <a href="#">Instuctions</a>
        </div>
        <div className="sidebar__link">
        <i class="fa fa-newspaper-o"></i>
          <a href="#">News</a>
        </div>
        
        <div className="sidebar__logout">
          <i className="fa fa-power-off"></i>
          <a href="#">Log out</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
