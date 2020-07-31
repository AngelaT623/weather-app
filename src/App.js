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
		};
	}
	componentDidMount() {
		const url = `https://api.openweathermap.org/data/2.5/weather?q=miami&units=imperial&appid=${key}`;
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				this.setState({
					forecast: {
						temperature: res.main.temp,
						city: res.name,
						timezone: res.timezone,
						name: res.name,
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
	render() {

		return (
			<div className='App'>
				<Header />
				<Forecast forecast={this.state.forecast} />
				{/* <Search name={this.state.city} key={this.state.city} /> */}
			</div>
		);
	}
}

export default App;
