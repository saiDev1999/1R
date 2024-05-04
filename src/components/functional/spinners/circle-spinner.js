import { CirclesWithBar } from "react-loader-spinner"



const CircleSpinner=()=>{
    return(
        <CirclesWithBar
  height="50"
  width="50"
  color="#4fa94d"
  outerCircleColor="#4fa94d"
  innerCircleColor="#4fa94d"
  barColor="#4fa94d"
  ariaLabel="circles-with-bar-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
    )
}
export default CircleSpinner