import React from "react";
import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Feature from "../../components/feature/Feature";
import Chart from "../../components/charts/Charts";
import Table from "../../components/table/Table";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type={"users"} />
          <Widget type={"orders"} />
          <Widget type={"earnings"} />
          <Widget type={"balance"} />
        </div>
        <div className="charts">
          <Feature />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="list">
          <div className="listContainer">
            <div className="listTitle">Lastest transactions</div>
            <Table />
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
