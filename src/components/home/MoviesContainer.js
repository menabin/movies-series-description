import React, { Component } from 'react'
import { connect } from 'react-redux';
import MovieForm from './MovieForm'
export class MoviesContainer extends Component {
    render() {
        const { movies } = this.props;
        //console.log('props' + this.props.movies.length  )
       // console.log('movies' + movies )
        let content = '';
        content = null != movies && movies.length > 0 ? movies.map((movie, index) => <MovieForm key={index} movie={movie} />) : null;
        return (
            <div className='row'>
                {content}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    movies: state.movies.movies
  });
export default connect(mapStateToProps)(MoviesContainer);
