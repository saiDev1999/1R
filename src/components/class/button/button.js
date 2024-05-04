import { Component } from "react";



class Button extends Component{
    render(){
        return(
           <>
           
           {
            true && 
            <button >hello</button>
           }
           </>
        )

    }

}
export default Button




// Steps :
// 1. class keyword followed by the name of the component 
// 2. here in class based we use methods to insert the jsx in the dom 
// parent class we inherient extends from Component 
// 3. to display the content we use render method 
