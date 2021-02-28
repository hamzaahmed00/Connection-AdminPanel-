import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Main from './components/main/main';
import Navbar from './components/navbar/navbar';
import Sidebar from './components/sidebar/sidebar';
import AddAdmin from './components/add/addAdmin'
import AddUser from './components/add/addUser'
import Exam from './components/exams/exam'
import Votes from './components/votes/votes'
import Instructions from './components/Instructions/Instructions'
import News from "./components/news/news";
import addAdmin from "./components/add/addAdmin";
import mainAdmin from "./components/add/mainAdmin";






const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };
  
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
   
    
    
    
    <div className="container">
    <Router>
    <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
      <Switch>
        <Route path='/main' exact component={Main} onEnter={Redirect} />
        <Route path='/addAdmin' component={addAdmin} />
        <Route path='/mainAdmin' component={mainAdmin} />
        <Route path='/adduser' component={AddUser} />
        <Route path='/exam' component={Exam} />
        <Route path='/votes' component={Votes} />
        <Route path='/instructions' component={Instructions} />
        <Route path='/news' component={News} />


      </Switch>
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
    </Router>





    </div>
  );
};

export default App;
