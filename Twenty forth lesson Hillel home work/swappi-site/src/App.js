
import React from "react";
import CharacterCard from "./components/SimpleCard";
import SimpleCard from "./components/SimpleCard";

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Star Wars Characters</h1>

      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Пошук персонажа..."
        />
      </div>

      <div className="row g-4">
        {}
        <div className="col-md-4">
          <SimpleCard
            name="Luke Skywalker"
            gender="Male"
            birthYear="19BBY"
            height="172"
            mass="77"
          />
        </div>
        <div className="col-md-4">
          <SimpleCard
            name="Leia Organa"
            gender="Female"
            birthYear="19BBY"
            height="150"
            mass="49"
          />
        </div>
        <div className="col-md-4">
          <SimpleCard
            name="Darth Vader"
            gender="Male"
            birthYear="41.9BBY"
            height="202"
            mass="136"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
