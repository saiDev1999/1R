

// function ButtonComponent(){
//   return(
//     <button>Click me</button>
//   )  
// }
// export default ButtonComponent

import OrderList from "../list/ordered-list"

const ButtonComponent =()=> {
    const addedToCart=0

  return(
    <>

    {
        addedToCart 
    &&
      <button>Move to cart</button>
     

      
        

    }
    
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

