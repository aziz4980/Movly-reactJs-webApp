import React, { Component } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";




class App extends Component {
  render() {
    return (
      <div >
        <NavBar />
        <div className="content">
          <Routes>

            <Route path={"/products"} element={<Products />} />
            <Route path={"/posts"} element={<Posts />} />
            <Route path={"/admin"} element={<Dashboard />} />
            <Route path={"/"} element={<Home />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
