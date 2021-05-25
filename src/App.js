import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Movies from './data';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <MovieList movies={ Movies } />
      </div>
      );
  }
}

export default App;