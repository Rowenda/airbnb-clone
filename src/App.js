// import logo from './logo.svg';
import './App.css';
import Flat from './components/flat';

function App() {
  const flat = {
    "id": "1",
    "name": "Charm at the Steps of the Sacré-Cœur/Montmartre",
    "imageUrl": "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
    "price": 164,
    "priceCurrency": "EUR",
    "lat": 48.884211,
    "lng": 2.34689
  };

  const flats = [flat, flat, flat, flat, flat];
  // fetch('https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json')
  //   .then(response => response.json())
  //   .then(data => flats.push(data));


  return (
    <div className='app'>
      <div className='main'>
        <div className='search'>

        </div>
        <div className='flats '>
          {flats.map((flat) => {
            return <Flat flat={flat} key={flat.id} />
          })}
        </div>
        </div>
      <div className='map'>

      </div>
    </div>
  );
}

export default App;
