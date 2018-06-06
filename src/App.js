import React, { Component } from 'react'
import './App.css'
// import cities from './city.list.json'

const cities = [{ name: 'newcastle' }, { name: 'dubai' }]

class App extends Component {

  state = {
    name: 'Tam'
  }

  fetchWeather = city => fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=c81375da1aed259ae20e218655ad8746`
  )
    .then(response => response.json())
    .then(json => {
      this.setState({ temp: json.main.temp })
    })

  componentDidMount() {
    this.fetchWeather('london')
  }

  render() {
    console.log(this.state)
    return (
      <main>
        <select onChange={e => this.fetchWeather(e.target.value)}>
          {cities.slice(0,100).map(city => <option>{city.name}</option>)}
          <option value='london'>London</option>
        </select>
        <h2>{this.state.temp} Kelvin </h2> <br />
        <h1>{Math.round(this.state.temp-273.15)} Celsius </h1>
      </main>
    )
  }
}

export default App
