import React, { Component } from "react";
import PropTypes from "prop-types";
import "../css/movie.css";
import MoviePoster from "../components/MoviePoster";
import LinesEllipsis from "react-lines-ellipsis";

class Movie extends Component {
  render() {
    return (
      <div className="Movie">
        <div className="Movie__Column">
          <a href={"./MovieDetail/" + this.props.id}>
            <MoviePoster poster={this.props.poster} alt={this.props.title} />
          </a>
        </div>
        <div className="Movie__Column">
          <br />
          <a href={"./MovieDetail/" + this.props.id}>{this.props.title}</a>
          <br />
          <br />
          <br />
          
          <div className="Movie__Synopsis">
            <LinesEllipsis
              text={this.props.synopsis}
              maxLine="4"
              ellipsis="...."
              trimRight
              baseOn="letters"
            />
          </div>
        </div>
      </div>
    );
  }
}

Movie.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired
};

export default Movie;
