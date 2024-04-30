
import ListItems from "./listItems"


const ListComponent = () =>{
    const iplTeams=["RCB","Hyderabad","Chennai"]
    const IndianLeague="INDIAN PREMIER LEAGUE"
    const imageURL ="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    const dimensions={
        width:200,
        height:200
    }
    return(
        <div>

        <h3>{IndianLeague}</h3>
        <img src={imageURL} height={dimensions.height} width={dimensions.width}  ></img>
        <button onClick={()=>{}} >Click me</button>
        <ul>
            <ListItems/>

 </ul>        </div>

       
    )
}

export default ListComponent