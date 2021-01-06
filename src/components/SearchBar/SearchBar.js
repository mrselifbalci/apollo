import React, { Component } from 'react'
import './SearchBar.css'

const sortByOptions={
    'Best Match':'Best Match',
    'Highest Rated':'Highest Rated',
    'Most Reviewed':'Most Reviewed'
}

export default class SearchBar extends Component {
renderSortByOptions=()=>{
    return Object.keys(sortByOptions).map((item)=>{
         let sortByOptionValue=sortByOptions[item] 
         return <li key={sortByOptionValue}>{item}</li>
    }
        )
}
render(){
    return(
        <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a href='www.#.com' >Let's Go</a>
        </div>
      </div>
    )
}


}
