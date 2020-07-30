import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <form>
                <input type="text" name="city" placeholder="Search by City"></input>
                <button>Search</button>              
            </form>
        );
    }
}

export default Search;