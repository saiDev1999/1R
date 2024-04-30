// import "./heading.css"
import styles from "./heading.module.css"




const Heading1 =()=>{
    const blackColor=true

    const headingStyle={
        
            color:"red",
            backgroundColor:"black"
        
    }

    return  <>
   <h1 className={styles.myStyle}  >Hello</h1>
      <h1   >Hello</h1>
        </>
}

export const Heading2 =()=>{
    return <h2>Hello</h2>
}

export const Heading3 =()=>{
    return <h3>Hello</h3>
}
export default Heading1