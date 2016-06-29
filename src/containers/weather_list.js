import React, { Component } from 'react';
import { cconnect } from 'react-redux';


class WeatherList extends Component {
  // constructor() {
  //
  // }

  render(){
    return(
      <table className="tabe table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    );
  }

}

function mapStateProps({ weather }) {
  return { weather };
}

export default connect (mapStateProps)(WeatherList);
