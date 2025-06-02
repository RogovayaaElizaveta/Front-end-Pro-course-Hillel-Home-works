import React from "react";

function SimpleCard(props) {
  // Витягуємо дані з props
  const name = props.name;
  const gender = props.gender;
  const birthYear = props.birthYear;
  const height = props.height;
  const mass = props.mass;

  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          <strong>Gender:</strong> {gender} <br />
          <strong>Birth Year:</strong> {birthYear} <br />
          <strong>Height:</strong> {height} cm <br />
          <strong>Mass:</strong> {mass} kg
        </p>
      </div>
    </div>
  );
}

export default SimpleCard;

