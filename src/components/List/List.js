import React, { useState, useEffect, createRef } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import PlaceDetails from '../PlaceDetails/PlaceDetails';
import useStyles from './styles.js';

const List = ({ places, type, setType, rating, setRating, childClicked, isLoading }) => {
  const [elRefs, setElRefs] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    setElRefs((refs) => Array(places.length).fill().map((_, i) => refs[i] || createRef()));
  }, [places]);

  return (
    <div className={classes.container}>
      <Typography variant="h4">Food & Dining around you</Typography>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
          <FormControl className={classes.formControl}>
            <InputLabel id="type">Фильтр</InputLabel>
            <Select id="type" value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value="restaurants">Рестораны</MenuItem>
              <MenuItem value="hotels">Отели</MenuItem>
              <MenuItem value="attractions">Развлечения</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="rating">Рейтинг</InputLabel>
            <Select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
              <MenuItem value="">Все</MenuItem>
              <MenuItem value="3">Выше 3.0</MenuItem>
              <MenuItem value="4">Выше 4.0</MenuItem>
              <MenuItem value="4.5">Выше 4.5</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3} className={classes.list}>
            {places?.map((place, i) => (
              <Grid ref={elRefs[i]} key={i} item xs={12}>
                <PlaceDetails selected={Number(childClicked) === i} refProp={elRefs[i]} place={place} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
};

export default List;
