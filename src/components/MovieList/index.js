import React, { Component } from 'react';
import axios from 'axios';
import { api } from '../../config';
import { RenderMovies, Loader, BrokenComponent } from '../';
import styles from './MovieList.module.scss';

class MovieList extends Component {
    state = {
        loading: true,
        movies: [],
        nextPage: false,
        prevPage: false,
    }
    componentDidMount() {
        this.fetchMovies();
    }
    fetchMovies = (url =`${api.url}/people`) => {
        this.setState({ loading: true });
        axios.get(url)
        .then((response) => {
            const retrivedResults = response.data.results;
            const nextPage = response.data.next
            const prevPage = response.data.previous
            this.setState({loading: false, movies: retrivedResults, nextPage: nextPage, prevPage: prevPage});
        }).catch((error)=> {
            this.setState({loading: false});
            console.warn(error);
            return <BrokenComponent />
        })
    }

    handleClick(page) {
        this.fetchMovies(page);
    }
    render() {
        const { prevPage, nextPage, movies } = this.state;
        if (this.state.loading) {
          return <Loader/>;
        }
        return (
            <>
                <div className={styles.row}>
                    <RenderMovies movies={movies}/>
                </div>
                <div className={ styles.footer }>
                    <button onClick={()=>this.handleClick(prevPage)} disabled={prevPage == undefined  ? true : false }>Wstecz</button>
                    <button onClick={()=>this.handleClick(nextPage)} disabled={nextPage == undefined ? true : false }>Dalej</button>
                </div>
            </>
        )
    }
}

export default MovieList;