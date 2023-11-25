import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from "./Menu";

/* import Home from "./Home";
import LazyHTML from './LazyHTML';
import LazyReact from './LazyReact'; */

const Home = React.lazy(() => import("../components/Home"));
const LazyHTML = React.lazy(() => import("../components/LazyHTML"));
const LazyReact = React.lazy(() => import("../components/LazyReact"));


export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={
            
            <React.Suspense>
              <Home />
            </React.Suspense>
          } />

          <Route path='/html' element={
            <React.Suspense>
              <LazyHTML />
            </React.Suspense>

          } />

          <Route path='/react' element={

            <React.Suspense>
              <LazyReact />
            </React.Suspense>
          } />

        </Routes>
      </BrowserRouter>
    )
  }
}
