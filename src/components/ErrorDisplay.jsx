import { useEffect } from "react";

function ErrorDisplay (props) {

  useEffect(()=>{
    console.log("!! There was an error !!")
    return () => {
      console.log("++ The error was resolved ++")
    }
  },[])

  return (
    <div>
      <p className="error">Error: { props.message }</p>
    </div>
  )
}

export default ErrorDisplay;