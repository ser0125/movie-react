import * as React from 'react';
import classes from './CirclePercentage.css';

const CirclePercentage = ({ percentageAverage }) => {
  const circleColor = checkColorCircle(percentageAverage);
  return (
        <div className={classes.SingleChart}>
        <svg viewBox="0 0 36 36" className={classes.CircularChart}>
          <path className={classes.CircleBg}
           d="M18 2.0845
           a 15.9155 15.9155 0 0 1 0 31.831
           a 15.9155 15.9155 0 0 1 0 -31.831"
       />
          <path className={`${classes.Circle} ${circleColor}`}
            strokeDasharray={`${percentageAverage * 10}, 100`}
            d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
          <text x="18" y="20.35" className={classes.TextPercentage}>{percentageAverage * 10}</text>
          <text x="23" y="15.35" fontSize=".4em">%</text>
        </svg>
      </div>
  );
};

const checkColorCircle = (percentageAverage) => {
  if (percentageAverage > 7.5) {
    return classes.CircleGreen;
  } else if (percentageAverage > 5) {
    return classes.CircleYellow;
  }
  return classes.CircleRed;
};

export default CirclePercentage;