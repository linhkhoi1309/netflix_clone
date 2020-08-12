import React from "react";
import "./css/App.css";
import Row from "./components/Row";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row title="NETFLIX ORIGINALS" url={requests.original} isLargeRow />
      {/* <Row title="Trending now" url={requests.trending} />
      <Row title="Top Rated" url={requests.top_rated} />
      <Row title="Action Movies" url={requests.action} />
      <Row title="Comedy Movies" url={requests.comedy} />
      <Row title="Horror Movies" url={requests.horror} />
      <Row title="Romance Movies" url={requests.romance} />
      <Row title="Documentaries" url={requests.documentary} /> */}
    </div>
  );
}

export default App;
