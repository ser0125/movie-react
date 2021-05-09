import * as React from 'react';
import classes from './CirclePercentage.css';

const CirclePercentage = (percentage) => {
  return (
        <div className={classes.SingleChart}>
        <svg viewBox="0 0 36 36" className={classes.CircularChart}>
          <path className={classes.CircleBg}
            d="M18 2.0845
              a 7,9577 7,9577 0 0 1 0 15.9155
              a 7,9577 7,9577 0 0 1 0 -15.9155"
          />
          <path className={classes.Circle}
            strokeDasharray="30, 50"
            d="M18 2.0845
              a 7,9577 7,9577 0 0 1 0 15.9155
              a 7,9577 7,9577 0 0 1 0 -15.9155"
          />
          <text x="18" y="20.35" className={classes.TextPercentage}>30%</text>
        </svg>
      </div>
  );
};

export default CirclePercentage;