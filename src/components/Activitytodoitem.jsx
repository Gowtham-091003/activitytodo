function Activitytodoitem(Props) {
    const arractivity=Props.arractivity
    const setarractivity=Props.setarractivity

function handledelete(deleteid) {
    const temparr=arractivity.filter(function(item){
        if (item.id === deleteid) {
            return false
        }
        else {
            return true
        }
    })
    setarractivity(temparr)
}
    return (
        <div className="flex justify-between">
            <p>{Props.index+1}.{Props.activity}</p>
            <button className="text-red-500" onClick={function () {handledelete(Props.id)}}> delete</button>
        </div>
    )
}
export default Activitytodoitem