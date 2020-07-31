import React, { Component } from 'react';

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchValue: '',
		};
	}
	handleChange = (event) => {
		this.setState({ searchValue: event.target.value });
	};
	handleSubmit = (event) => {
		event.preventDefault();
	};
	render() {
		return (
			<form onChange={this.handleChange} className='box'>
				<input
					type='text'
					className='city-bar'
					placeholder='Search by City'></input>
				<button onChange={this.handleSubmit}>Search</button>
			</form>
		);
	}
}

export default Search;