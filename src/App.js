import React, { Component } from 'react';
import Header from './Header';
import Search from './Search';
import Forecast from "./Forecast"
import './App.css';

const key = process.env.REACT_APP_WEATHERAPP_API_KEY;
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
	  forecast: null,
	  searchString: "miami",
		};
	}
	componentDidMount() {
		this.handleSearch()
	}
	handleSearch = () => {
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.searchString}&units=imperial&appid=${key}`;
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				this.setState({
					forecast: {
						temperature: res.main.temp,
						city: res.name,
						feels_like: res.main.feels_like,
						humidity: res.main.humidity,
						wind: res.wind.speed,
						icon: res.weather[0].icon,
						description: res.weather[0].description,
					},
				});
			})
			.catch(console.error);
	}
	handleChange = (event) => {
		this.setState({ searchString: event.target.value })
	}
	handleSubmit = (event) => {
		event.preventDefault()
		this.handleSearch()
	}
	
	render() {

		return (
			<div className='App'>
				<Header />
				<Forecast forecast={this.state.forecast} />
				<Search handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
			</div>
		);
	}
}

export default App;
