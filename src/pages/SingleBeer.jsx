import { useParams } from "react-router-dom";

function SingleBeer({beers}) {
  const beerId = useParams();
  const searchBeer = beers.find((pivo) => pivo._id === beerId._id);

  return (
    <div>
      <h2>{`${searchBeer.name}' details`}</h2>
      <img src={searchBeer.image_url} alt="" />
      <h3>{searchBeer.name}</h3>
      <p>"{searchBeer.tagline}"</p>
      <p>
        <strong>First brewed:</strong> {searchBeer.first_brewed}
      </p>
      <p>
        <strong>Attenuation level:</strong> {searchBeer.attenuation_level}
      </p>
      <p>
        <strong>Description:</strong> {searchBeer.description}
      </p>
      <p>
        <strong>Contributed by:</strong> {searchBeer.contributed_by}
      </p>
    </div>
  );
}

export default SingleBeer;
