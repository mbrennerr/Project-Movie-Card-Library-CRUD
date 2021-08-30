import React from 'react';
import { Link } from 'react-router-dom';
import { string, shape } from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { imagePath, title, id, storyline } = movie;
    return (
      <div data-testid="movie-card">
        <img alt="lintChato" src={ imagePath } />
        <h1>{title}</h1>
        <p>{storyline}</p>
        <Link to={ `movies/${id}` }>VER DETALHES</Link>

      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: shape({
    imagePath: string.isRequired,
    title: string.isRequired,
    id: string.isRequired,
    storyline: string.isRequired,
  }).isRequired,
};
export default MovieCard;
