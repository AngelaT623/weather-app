import React, { Component } from 'react';


class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
		forecast: [],
	};
	}

	render() {
		return (
			<form onSubmit={this.props.handleSubmit} className='box'>
				<input onChange={this.props.handleChange}
					type='text'
					className='city-bar'
					placeholder='Search by City'></input>
				<input className='button' type="submit" value="Search"/>
			</form>
		);
	}
}

export default Search;