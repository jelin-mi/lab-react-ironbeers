import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleBeer() {
  const [beer, setBeer] = useState([]);
  const beerId = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId._id}`)
      .then((res) => {
        setBeer(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [beerId._id]);

  return (
    <div className="container">
    <h2>{`${beer.name}' details`}</h2>
    <div className="card">
      
      <div className="pic">
        <img src={beer.image_url} alt="" />
      </div>
      <div className="info">
        <h3>{beer.name}</h3>
        <p>"{beer.tagline}"</p>
        <p>
          <strong>First brewed:</strong> {beer.first_brewed}
        </p>
        <p>
          <strong>Attenuation level:</strong> {beer.attenuation_level}
        </p>
        <p>
          <strong>Description:</strong> {beer.description}
        </p>
        <p>
          <strong>Contributed by:</strong> {beer.contributed_by}
        </p>
      </div>
    </div></div>
  );
}

export default SingleBeer;
