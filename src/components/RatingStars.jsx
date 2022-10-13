import React, { useState } from 'react';

const emptyStar =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/1088px-Five-pointed_star.svg.png';
const fullStar =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png';

export const RatingStars = () => {
  //We know that we have 5 stars
  const stars = [1, 2, 3, 4, 5];
  //We want to have an effect when we hover over a star
  const [hoverStars, setHoverStars] = useState(0);
  //We want our changes (clicking on a star) to be reflected in the state
  const [clickedStars, setClickedStars] = useState(0);

  //Once clicked, we want to execute a function that changes emptyStar to fullStar

  const getImage = (star) => {
    return hoverStars >= star || clickedStars >= star ? fullStar : emptyStar;
  };

  return (
    <div style={{ padding: '15px' }}>
      {stars.map((star, index) => (
        <img
          src={getImage(star)}
          alt='star'
          key={`star-${index}`}
          width={75}
          height={75}
          onMouseEnter={() => {
            setHoverStars(star);
            if (star !== clickedStars) {
              setClickedStars(clickedStars);
            }
          }}
          onMouseLeave={() => setHoverStars(0)}
          onClick={() => setClickedStars(star)}
        />
      ))}
    </div>
  );
};
