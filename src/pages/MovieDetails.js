import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes, { objectOf } from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      whileLoading: true,
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id)
      .then((movie) => {
        this.setState({ movie, whileLoading: false });
      });
  }

  deleteMovie = () => {
    const { match: { params: { id } } } = this.props;
    movieAPI.deleteMovie(id).then();
  }

  render() {
    const { movie, whileLoading } = this.state;
    // Change the condition to check the state
    // if (true) return <Loading />;
    if (whileLoading) {
      return (<Loading />);
    }
    const { title, storyline, id, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">
        <h1>{title}</h1>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link
          onClick={ this.deleteMovie }
          to="/"
        >
          DELETAR

        </Link>
      </div>
    );
  }
}
MovieDetails.propTypes = {
  match: objectOf(PropTypes.any).isRequired,
};

export default MovieDetails;
