import * as React from 'react';
import classes from './Genre.css';

const Genre = ({genre}) => {
  const genreType = checkGenreType(genre.name);
  return (
        <>
        <span className={`${classes.Genre} ${genreType}`}>{genre.name}</span>
    </>
  );
};

const checkGenreType = (genre) => {
  switch (genre) {
    case 'Action':
      return classes.Action;
    case 'Thriller':
      return classes.Thriller;
    case 'Crime':
      return classes.Crime;
    case 'Drama':
      return classes.Drama;
    case 'Science Fiction':
      return classes.ScienceFiction;
    case 'Adventure':
      return classes.Adventure;
    case 'Fantasy':
      return classes.Fantasy;
    case 'Animation':
      return classes.Animation;
    case 'Horror':
      return classes.Horror;
    case 'Romance':
      return classes.Romance;
    case 'Comedy':
      return classes.Comedy;
    default:
      return classes.Default;
  }
};

export default Genre;
