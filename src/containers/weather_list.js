import React, { Component } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { connect } from 'react-redux';


class WeatherList extends Component {
  // constructor() {
  //
  // }

  rederWeather(cityData){
    const name = cityData.city.name;
    const temps = cityData.list.map((weather) => weather.main.temp);
    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Sparklines hieght = {120} width={180} data= {temps}>
            <SparklinesLine color="red"></SparklinesLine>
          </Sparklines>
        </td>
      </tr>
    );
  }

  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.rederWeather)}
        </tbody>
      </table>
    );
  }

}

function mapStateProps({ weather }) {
  return { weather };
}

export default connect (mapStateProps)(WeatherList);
