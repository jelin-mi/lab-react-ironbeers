import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState();
  const [contributedBy, setContributedBy] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleTagline = (e) => setTagline(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleFirstBrewed = (e) => setFirstBrewed(e.target.value);
  const handleBrewersTips = (e) => setBrewersTips(e.target.value);
  const handleAttenuationLevel = (e) => setAttenuationLevel(e.target.value);
  const handleContributedBy = (e) => setContributedBy(e.target.value);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBeer = {
      name,
      tagline,
      description,
      firstBrewed,
      brewersTips,
      attenuationLevel,
      contributedBy,
    };

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
      .then(() => {
        // Reset states
        setName("");
        setTagline("");
        setDescription("");
        setFirstBrewed("");
        setBrewersTips("");
        setAttenuationLevel();
        setContributedBy("");

        navigate("/beers")
      })
      .catch((err) => {
        console.log(err);
      })
  };

  return (
    <div>
      <h2>Add new beer</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Name of a beer"
          name="name"
          value={name}
          onChange={handleName}
        />

        <input
          type="text"
          placeholder="Tagline of a beer"
          name="tagline"
          value={tagline}
          onChange={handleTagline}
        />

        <input
          type="text"
          placeholder="Description of a beer"
          name="description"
          value={description}
          onChange={handleDescription}
        />

        <input
          type="text"
          placeholder="First brewed of a beer"
          name="firstBrewed"
          value={firstBrewed}
          onChange={handleFirstBrewed}
        />
        <input
          type="text"
          placeholder="Brewers tips of a beer"
          name="brewersTips"
          value={brewersTips}
          onChange={handleBrewersTips}
        />

        <input
          type="number"
          placeholder="Attenuation level of a beer"
          name="attenuationLevel"
          value={attenuationLevel}
          onChange={handleAttenuationLevel}
        />
        <input
          type="text"
          placeholder="Beer contributed by..."
          name="contributedBy"
          value={contributedBy}
          onChange={handleContributedBy}
        />

        <button type="submit">
          Submit a Beer
        </button>
      </form>
    </div>
  );
}

export default NewBeer;