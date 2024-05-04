
const ButtonComponent =(props)=> {
  console.log(props,"props")

 

  const {text,bgColor,buttonProperties:{width,height}}=props

  return(
    <>  
      <button style={{
        backgroundColor:bgColor,
        width:width,
        height:height
      }} >{text}</button> 
    </>
  )
    // if(login){
    //     return(
    //         <button>Click me</button> 
    
    //     )

    // }else{
    //     return(
    //         <button>Login false</button> 
    
    //     )

    // }


   


}
export default ButtonComponent

