import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ListBeers from "./pages/ListBeers";
import NewBeer from "./pages/NewBeer";
import RandomBeer from "./pages/RandomBeer";
import SingleBeer from "./pages/SingleBeer";

function App() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      console.log("response", response.data);
      setBeers(response.data);
    });
  }, []); 


 /*  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers/random").then((response) => {
      console.log("res", response.data);
      setBeers(response.data);
    });
  }, []); */


  return (
    <div className="App">
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<ListBeers beers={beers} setBeers={setBeers} />} />
        <Route path="/beers/:_id" element={<SingleBeer beers={beers} />} />
        <Route path="/random-beer" element={<RandomBeer beers={beers} setBeers={setBeers}/>} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;