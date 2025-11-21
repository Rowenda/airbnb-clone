// import logo from './logo.svg';
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './App.css';
import Flat from './components/flat';
import Marker from './components/marker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: [],
      // State to keep track of the selected flat
      selectedFlat: null
    };
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ flats: data });
      });
  }

  // Method to update the selectedFlat in the state
  selectFlat = (flat) => {
    this.setState({ selectedFlat: flat });
  }

  render() {
    let center = {
      lat: 48.8566, lng: 2.3522
    };
    if (this.state.selectedFlat) {
      center = {
        lat: this.state.selectedFlat.lat,
        lng: this.state.selectedFlat.lng
      };
    }

    return (
      <div className='app'>
        <div className='main'>
          <div className='search'>

          </div>
          <div className='flats '>
            {this.state.flats.map((flat) => {
              return <Flat
              flat={flat}
              key={flat.id}
              // We pass down the selectFlat method as a prop
              selectFlat={this.selectFlat} />
            })}
          </div>
          </div>
        <div className='map'>
          <GoogleMapReact
            center={center}
            zoom={14}>
              {this.state.flats.map((flat) => {
                return <Marker
                  lat={flat.lat}
                  lng={flat.lng}
                  text={flat.price + flat.priceCurrency}
                  key={flat.id} />
              })}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}
export default App;
