import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "../components/Search";

function ListBeers() {
  const [beers, setBeers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const onFilter = (searchTerm) => {
    if (searchTerm === '') {
      setBeers(beers);
    } else {
      setBeers(
        beers.filter((beer) =>
          beer.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  };

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        setBeers(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
    <h2>List of all beers</h2>
      {isLoading ? (
        "Loading..."
      ) : (
        <div>
        <Search onFilter={onFilter}/>
          
          {beers.map((beer) => {
            return (
              <div key={beer._id} className="card">
              <div className="pic">
                <img src={beer.image_url} alt="" />
                </div>

                <div className="info">
                <Link to={beer._id}>
                  <h3>{beer.name}</h3>
                </Link>
                <p>{beer.tagline}</p>
                <p>{beer.contributed_by}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ListBeers;