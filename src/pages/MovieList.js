import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import { Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      whileLoading: true,
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((movies) => {
      this.setState({ movies, whileLoading: false });
    });
  }

  render() {
    const { movies, whileLoading } = this.state;

    // Render Loading here if the request is still happening

    if (whileLoading) {
      return (<Loading />);
    }

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
