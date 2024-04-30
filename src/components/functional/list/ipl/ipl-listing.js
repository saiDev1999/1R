





const IplTeamListing =()=>{

    const iplTeams=[
        {
          name:"Hyd",
          teamPlayers:[
            {
              playerName:"head",
              playerImage:"",
              height:6
            },
             {
              playerName:"Cummins",
              playerImage:"",
              height:6.2
            },
            
            
            ],
            winningCount: 6,
        },
          {
          name:"Mumbai",
          teamPlayers:[
            {
              playerName:"Rohit sharma",
              playerImage:"",
              height:5.9
            },
             {
              playerName:"Hardhik",
              playerImage:"",
              height:6
            },
            
            
            ],
            winningCount: 4,
        }
        ]

        const filteredData=(iplTeams)=>{
    
            return iplTeams.filter(eachTeam=>eachTeam.winningCount>=5)
         
             
           }

           const winningCountSummation =(iplTeams)=>{
            const result =iplTeams.reduce((a,b)=>a+b.winningCount,0)
            return result
         }

    return(
        <>
        <h1>IPL 2024 TEAMS</h1>
        <h4>Total winning counts   {winningCountSummation(iplTeams)}</h4>

        {
             filteredData(iplTeams).map((team)=>{
                return(
                    <div>
                        
                  <h2>{team.name}</h2>

               { team.teamPlayers.map((eachPlayer)=>{
                  const{playerName,height}=eachPlayer

                return(
                  <div>
                    <p>{`${playerName} and his height was ${height}`}</p>
                  </div>
                )
                
                })
        }
             </div>  )})
        }


        </>
    )

}

export default IplTeamListing