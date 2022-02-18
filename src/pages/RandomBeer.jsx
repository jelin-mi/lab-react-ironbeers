import axios from "axios";
import { useEffect, useState } from "react";

function RandomBeer() {
  const [beers, setBeers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((res) => {
        setBeers(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  return (
    <div className="container">
    <h2>Random beer</h2>
      {isLoading ? (
        "Loading..."
      ) : (
        <div className="card">
        <div className="pic">
          <img src={beers.image_url} alt="" />
          </div>

          <div className="info">
          <h3>{beers.name}</h3>
          <p>"{beers.tagline}"</p>
          <p>
            <strong>First brewed:</strong> {beers.first_brewed}
          </p>
          <p>
            <strong>Attenuation level:</strong> {beers.attenuation_level}
          </p>
          <p>
            <strong>Description:</strong> {beers.description}
          </p>
          <p>
            <strong>Contributed by:</strong> {beers.contributed_by}
          </p></div>
        </div>
      )}
    </div>
  );
}

export default RandomBeer;