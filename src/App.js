import React from "react";

import MainHeader from "./components/main-header/MainHeader";
import MoviesList from "./components/movies-list/MoviesList";

import './App.scss';

function App() {
  return (
    <div className="App">
      <MainHeader/>

       <section className="movies-popular">
          <div className="container">
            <MoviesList/>
          </div>
       </section>
    </div>
  );
}

export default App;
