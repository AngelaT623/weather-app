import React, { Component } from 'react';

class Forecast extends Component {


	render() {
		const dateBuilder = (d) => {
			let months = [
				'January',
				'February',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December',
			];
			let days = [
				'Sunday',
				'Monday',
				'Tuesday',
				'Wednesday',
				'Thursday',
				'Friday',
				'Saturday',
			];

			let day = days[d.getDay()];
			let date = d.getDate();
			let month = months[d.getMonth()];
			let year = d.getFullYear();

			return `${day} ${date} ${month} ${year}`;
        };
        if  (!this.props.forecast) {
            return null
        }
		return (
			<div className='forecast'>
				<div className='date'>{dateBuilder(new Date())}</div>
				<h1 className="city">{this.props.forecast.city}</h1>
				<h1 className='temp'>
					{Math.round(this.props.forecast.temperature)}°F
				</h1>
				<p>It feels like: {Math.round(this.props.forecast.feels_like)}°F</p>
				<p>Humidity: {this.props.forecast.humidity} %</p>
				<p>Wind speed: {Math.round(this.props.forecast.wind)} mph</p>

				<img
					className='img'
					src={`http://openweathermap.org/img/wn/${this.props.forecast.icon}.png`}
					alt={'weather icon'}
				/>

				<p>Conditions: {this.props.forecast.description}</p>
			</div>
		);
	}
}

export default Forecast;