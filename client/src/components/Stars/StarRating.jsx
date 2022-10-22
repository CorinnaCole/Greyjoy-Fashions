import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';


const StarRating = (props) => {

  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [displayRec, setDisplayRec] = useState(null);
  const ratingsOutcome = ['Poor', 'Fair', 'Average', 'Good', 'Great'];


  const hoverDisplay = (val) => {
    setHover(val);
    setDisplayRec(val);
  };


  if (props.rating) {
    console.log('ive entered into props.rating from within StarRating, props.rating >>', props.rating);
    return (
      <div className="stars-container">
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <FaStar
              className="star"
              color={ratingValue <= props.rating ? '#ffc107' : 'grey'}
              size={15}
              key={i}/>
          );
        })}
      </div>
    );
  } else {

    return (
      <div className="stars-container">
        {displayRec ?
          <div><small>{ratingsOutcome[displayRec - 1]}</small></div>
          : <br/>}
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label key={i}>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                required
                onClick={() => { setRating(ratingValue); props.selectStars(ratingValue); }}
              />
              <FaStar
                className="star"
                color={ratingValue <= ( hover || rating) ? '#ffc107' : 'grey'}
                size={15}
                onMouseEnter={() => hoverDisplay(ratingValue)}
                onMouseLeave={() => { setHover(null); setDisplayRec(rating); }}
                key={i}/>
            </label>
          );
        })}
      </div>
    );
  }
};

export default StarRating;