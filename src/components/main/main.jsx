import React from "react";
import "./main.css";
import hello from "../../assets/hello.svg";
import Chart from "./../charts/chart";

const Main = () => {
  return (
    <main>
      <div className="main__container">
        <div className="main__title">
          <img src={hello} alt="hello" />
          <div className="main__greeting">
            <h1>Hello Codersbite</h1>
            <p>Welcome to your admin dashboard</p>
          </div>
        </div>
        <div className="main__cards">
          <div className="card">
            <i className="fa fa-user-o fa-2x text-lightblue"></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of Users</p>
              <span className="font-bold text-title">578</span>
            </div>
          </div>
          <div className="card">
            <i className="fa fa-user-o fa-2x text-lightblue"></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of Admins</p>
              <span className="font-bold text-title">4</span>
            </div>
          </div>


         

         
        </div>

        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>daily Reports</h1>
                <p>Riyadh, Saudia</p>
              </div>
              <i className="fa fa-usd"></i>
            </div>
            <Chart />
          </div>
          
        </div>
      </div>
    </main>
  );
};

export default Main;
