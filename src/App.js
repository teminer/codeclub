import React, { Component } from 'react'
import './App.css'

class App extends Component {

  state = {
    name: 'Luke',
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
          <option value='london'>London</option>
          <option value='newcastle'>Newcastle</option>
          <option value='dubai'>Dubai</option>
        </select>
        <h1>{this.state.temp}</h1>
      </main>
    )
  }
}

export default App
