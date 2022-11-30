import './App.css';
import { useState, useEffect } from 'react';

// components
import ErrorDisplay from './components/ErrorDisplay';
import InputZipCode from './components/InputZipCode';
import TemperatureDisplay from './components/TemperatureDisplay';

// API KEY
const myOpenWeatherApiKey = "" /* <-- replace with your api key here (using https://home.openweathermap.org/api_keys)*/

function App () {
  // states
  const [temperature, setTemperature] = useState(null)
  const [zipCode, setZipCode] = useState("")

  // effects
  async function getTemperature() {
    try {
      console.log("obtaining temperature...")
      let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${myOpenWeatherApiKey}`)
      console.log(response)
      if (response.ok) {
        let data = await response.json()
        console.log(data)
        if (data) {
          console.log(data.main.temp)
          setTemperature(data.main.temp)
        }
      }
      else {
        setTemperature({temperature: null})
      }
    }
    catch (e) { 
      console.error(e)
    }
  }

  useEffect(()=>{
    getTemperature()
  },[zipCode])

  // handlers
  const updateZipCode = (newZipCode) => {
    setZipCode(newZipCode)
  }

  // render
  function renderDisplay() {
    // don't show any display if no zip code has been entered
    if (!zipCode) {
      return null
    }
    // show an error if we don't get back valid data
    else if (!temperature) {
      return <ErrorDisplay message="Unable to get temperature information from your zip code." />
    }

    return (
      <div className="App">
        <TemperatureDisplay tempInKelvin={temperature}/>
      </div>
    )
  }

  return (
    <div className="App">
      <h2>Temperature Conversion App</h2>
      <InputZipCode updateZipCode={updateZipCode} buttonText="Get Temperature"/>
      { renderDisplay() }
    </div>
  );
}

export default App;
