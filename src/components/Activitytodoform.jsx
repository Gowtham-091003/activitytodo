// import { useState } from "react"
import Activitytodoitem from "./Activitytodoitem"


function Activitytodoform(Props) {

        const arractivity=Props.arractivity
        const setarractivity=Props.setarractivity
    return(        
        <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
            <h1 className="text-xl font-medium">Today's Activity</h1>
            {arractivity.length ===0?<p>Ypu haven't added anything</p>:""}
            {
                arractivity.map(function(item,index) {
                    return (<p><Activitytodoitem activity={item.activity} id={item.id} index={index} arractivity={arractivity} setarractivity={setarractivity}></Activitytodoitem></p>)
                })
            }
        </div>)
}
export default Activitytodoform