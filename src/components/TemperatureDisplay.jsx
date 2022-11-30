import { useState, useEffect } from "react"

function TemperatureDisplay (props) {
  // NOTE: Yes, you probably can refactor this component to eliminate these state values, but we've added them for the sake of understanding life-cycle methods better, so please do not remove them. 

  // state
  const [tempInCelsius, setTempInCelsius] = useState(null)
  const [tempInFahrenheit, setTempInFahrenheit] = useState(null)

  // effects
  function updateTempValues() {
    let tC = props.tempInKelvin - 273.15
    let tF = (tC * 9 / 5) + 32

    setTempInCelsius(tC.toFixed(2))
    setTempInFahrenheit(tF.toFixed(2))
  }

  useEffect(()=>{
    updateTempValues()
  },[props.tempInKelvin])

  return (
    <div>
      <p>Current Temperature:</p>
      <span className="temperature">
        { tempInCelsius }
        <span className="units">°C</span>
        &nbsp;&nbsp;&nbsp;&nbsp; 
        { tempInFahrenheit }
        <span className="units">°F</span>
      </span>
    </div>
  )
}

export default TemperatureDisplay;