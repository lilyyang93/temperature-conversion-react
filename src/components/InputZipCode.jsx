function InputZipCode (props) {
  // handlers
  const handleZipCode = () => {
    const inputZipCode = document.getElementById("input-zipcode")
    console.log(inputZipCode.value)
    props.updateZipCode(inputZipCode.value)
  }

  // render
  return (
    <div>
      <hr />
      <div>
        <label>Enter Zip Code: </label>
        <input id="input-zipcode" placeholder="zip code"/>
        <button onClick={()=>{handleZipCode()}}>{ props.buttonText }</button>
      </div>
      <hr />
    </div>
  )
}

export default InputZipCode;