import React from 'react';
import PropTypes from 'prop-types'

function Food({ name , number, rating }) {
    return(
    <div>
        <h1>I like { name }</h1>
        <p> rating is { rating } </p>
        <h2 alt={ name }>number is { number }</h2>
    </div>
    );
}

Food.propTypes = {
    name: PropTypes.string.isRequired,
    rating: PropTypes.number,
    number: PropTypes.string.isRequired
};

const foodILike = [
    {
        id:1,
        name:"kimchi",
        number:'1',
        rating: 4.2
    },
    {
        id:2,
        name:"something1",
        number:'2',
        rating:4.5
    },
    {
        id:3,
        name:"something2",
        number:'3',
        rating:5.0
    },
    {
        id:4,
        name:"something3",
        number:'4',
        rating:2.2
    }
];


function App() {
  return (
      <div>
      {foodILike.map(dish => (
              <Food key={dish.id} name={dish.name} number={dish.number} rating={dish.rating}/>
        ))}
      </div>
    );
}

export default App;
