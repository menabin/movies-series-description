import React, { Component } from 'react'
import SearchForm from './SearchForm'
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner'
import MoviesContainer from './MoviesContainer'

class Landing extends Component {
    render() {
        const {loading} = this.props
        console.log('inside loading' + loading)
        return (
            <div className="container">
                <SearchForm />
                {loading ? <Spinner/> : <MoviesContainer/> }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.movies.loading
  }
 // (console.log(state.movies.text))
  );

export default connect(
    mapStateToProps
  )(Landing)
