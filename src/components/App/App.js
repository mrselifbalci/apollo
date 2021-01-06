import React, { Component } from 'react'
import './App.css';
import BusinessList from '../BusinessList/BusinessList'
import SearchBar from '../SearchBar/SearchBar';



export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Apollo Project</h1>
        <SearchBar />
        <BusinessList /> 
      </div>
    )
  }
}

