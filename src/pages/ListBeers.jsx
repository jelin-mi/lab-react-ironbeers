import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function ListBeers({beers, setBeers }) {

 /*  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      console.log("response", response.data);
      setBeers(response.data);
    });
  }, []);  */

  return (
    <div>
      <h2>List of all beers</h2>
      {beers.map((beer) => {
          return (
        <div key={beer._id}>
          <img src={beer.image_url} alt="" />
          <Link to={beer._id}>
          <h3>{beer.name}</h3>
          </Link>
          <p>{beer.tagline}</p>
          <p>{beer.contributed_by}</p>
        </div>
          );
      })}
    </div>
  );
}

export default ListBeers;