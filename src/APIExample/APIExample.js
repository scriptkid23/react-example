import React, { Component } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTint } from "@fortawesome/free-solid-svg-icons";
export default class APIExample extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      main: {
        temp: 0,
        temp_min: 0,
        temp_max: 0,
        humidity: 0,
        pressure: 0,
        feels_like: 0,
      },
      wind: null,
      weather: null,
      city: '',
    };
  }
  exportIcon = (icon) => {
    return `https://openweathermap.org/img/w/${icon}.png`;
  };
  convertKelvinToCelsius = (temperature) => {
    return Math.round(parseFloat(temperature) - 273.15);
  };
  fetchData = async (city) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1ca3099aa4d9640a59fcbcfe8488a8c5`
    );
    return response.json();
  };
  async componentDidMount() {
    const data = await this.fetchData("hanoi");
    if (data.cod === 200) {
      this.setState({
        name: data.name,
        main: data.main,
        wind: data.wind,
        weather: data.weather[0],
      });
    }
  }
  setCity = (e) => {
    this.setState({
      city: e.target.value
    })
  }
  getCity = async (e) => {
    e.preventDefault();
    const data = await this.fetchData(this.state.city);
    if (data.cod === 200) {
      this.setState({
        name: data.name,
        main: data.main,
        wind: data.wind,
        weather: data.weather[0],
      });
    }
    
  }
  render() {
    return (
      <div className="api-example">
        {this.state.name.length > 0 && (
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title d-flex">
                {this.state.name}
                <img
                  src={this.exportIcon(this.state.weather.icon)}
                  style={{ width: "30px" }}
                  alt="weather"
                />
              </h5>
              <p className="card-text">
                <h3>
                  {this.convertKelvinToCelsius(this.state.main.temp)}
                  <span>&#8451;</span>
                </h3>
                <span style={{ opacity: 0.7 }}>
                  {" "}
                  <FontAwesomeIcon icon={faTint} /> {this.state.main.humidity}
                </span>
                <br />
                <span style={{ opacity: 0.7 }}>
                  Description: {this.state.weather.main},{" "}
                  {this.state.weather.description}
                </span>
                <br />
              </p>
            </div>
          </div>
        )}
        <form className="m-3" onSubmit={e => this.getCity(e)}>
          <div class="form-group">
            <input
              type="text"
              onChange={e => this.setCity(e)}
              class="form-control"
              placeholder="Enter city"
            />
          </div>
        </form>
      </div>
    );
  }
}
