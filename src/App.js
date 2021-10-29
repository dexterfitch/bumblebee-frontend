import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Palettes from "./components/Palettes";
import Categories from "./components/Categories";

function App() {
  const [categories, setCategories] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [palettes, setPalettes] = useState([]);

  useEffect(() => {
      let fetchAddress;

      if (categoryFilter === "all") {
          fetchAddress = "http://localhost:9292/palettes"
      } else {
          fetchAddress = `http://localhost:9292/palettes/category/${categoryFilter}`
      }

      fetch(fetchAddress)
      .then(response => response.json())
      .then(json => setPalettes(json))
  }, [categoryFilter])

  useEffect(() => {
      fetch("http://localhost:9292/categories")
      .then(response => response.json())
      .then(json => setCategories(json))
  }, [])


  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">bumblebee</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/palettes">Palettes</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/categories">Categories</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/palettes">
            <Palettes 
              categoryFilter={categoryFilter} 
              setCategoryFilter={setCategoryFilter} 
              categories={categories} 
              palettes={palettes} 
              setPalettes={setPalettes} 
            />
          </Route>
          <Route path="/categories">
            <Categories setCategoryFilter={setCategoryFilter} categories={categories} setCategories={setCategories} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;