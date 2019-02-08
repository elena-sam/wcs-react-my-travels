import React from 'react';

function Travel(props) {
  return props.travels.map((travel, index) => {
    return (
      <picture key={index}>
        <img
          src={travel.photo}
          alt={travel.country} />
        <figcaption>
          <p>{travel.destination}, {travel.country}</p>
          <p>Distance: {travel.distance}</p>
          <small>Photo credit: {travel.photoCredit}</small>
        </figcaption>
      </picture>
    )
  })
}

export default Travel;