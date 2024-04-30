import React from "react"


const ListItems =()=>{
    const iplHistory=[
        {
            name:"RCBians",
            winningHistory:[],
            totalScore:1000,
            teamPlayers:[
                "Kohli","DK","Maxwell","Siraj"
            ]
        },
        {
            name:"Hyderabad",
            totalScore:900,
            winningHistory:[2006,2009],
            teamPlayers:[
                "Head","Klsen"
            ]
        },
       
    ]
   
    return(
   <React.Fragment  >

    {
        iplHistory.map((value,index)=>
     { 
        const {totalScore,name,teamPlayers}=value
            
            return(<>
                { totalScore>800 ?  <><h3>{index+1} . {name}</h3>
                  {
                    teamPlayers.map(player=><>
                    <p>{player}</p>
                    </>)
                  }
                  </>
                  :null
                }
                </>
        )
    }
        )
    }

        </React.Fragment>
    )
}

export default ListItems






