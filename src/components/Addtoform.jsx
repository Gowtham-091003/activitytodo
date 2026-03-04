import { useState } from "react"

function Addtodoform(Props) {
    const arractivity=Props.arractivity
    const setarractivity=Props.setarractivity

    const[newactivity,setnewactivity]=useState("")

    function handlechange(event) {
        setnewactivity(event.target.value)
    }

    function handleadd() {
        setarractivity([...arractivity,{id:arractivity.length+1,activity:newactivity}])
    }
    return( 
        
        <div>
            <h1 className="text-xl font-medium bg-transparent p-2 placeholder:Next activuty">Manage Activities!</h1>
            <input type="text" className="border border-black" value={newactivity} onChange={handlechange}/>
            <button className="bg-black text-white border border-black" onClick={handleadd}>Add</button>
        </div>)
}
export default Addtodoform