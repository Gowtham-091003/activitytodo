import { useState } from "react"
import Activitytodoform from "./Activitytodoform"
import Addtodoform from "./Addtoform"


function Todocomponents() {
    const[arractivity,setarractivity]=useState([
        {
            id:"0",
            activity:"Wake up morning at 6:00AM"
        },
        {
            id:"1",
            activity:"Go for a walk"
        }
    ])
    return(
        
     <div className="flex gap-5 flex-wrap">

        <Addtodoform arractivity={arractivity} setarractivity={setarractivity}></Addtodoform>
        <Activitytodoform arractivity={arractivity} setarractivity={setarractivity}></Activitytodoform>
     </div>   
    )
}
export default Todocomponents