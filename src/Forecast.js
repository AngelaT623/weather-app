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
			<div>
				<div className='date'>{dateBuilder(new Date())}</div>
				<p>{this.props.forecast.temperature}°F</p>
				<p>City: {this.props.forecast.city}</p>
				<p>Timezone: {this.props.forecast.timezone}</p>
				<p>It feels like: {this.props.forecast.feels_like}</p>
				<p>Humidity: {this.props.forecast.humidity}</p>
				<p>Wind speed: {this.props.forecast.wind}</p>
				<img src={`http://openweathermap.org/img/wn/${this.props.forecast.icon}.png`} alt= {"weather icon"} />
				<p>Conditions: {this.props.forecast.description}</p>
			</div>
		);
	}
}

export default Forecast;