import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Signup(Props) {

    const navigate=useNavigate()
    const users=Props.users
    const setusers=Props.setusers

    const[Eusername,setEusername]=useState("")
    const[Epassword,setEpassword]=useState("")

    function handleEusername(event) {
    setEusername(event.target.value)
    }
    function handleEpassword(event) {
        setEpassword(event.target.value)
    } 
    function handleuser() {
        setusers([...users,{username:Eusername,password:Epassword}])
        navigate("/")

    } 
    return(<div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-xl font-medium">Hayy Hi</h1>
                <p className="mb-2">You can sign up here :)</p>
                <input type="text"  value={Eusername} onChange={handleEusername} className="border border-black mb-2" placeholder="username" /> <br />
                <input type="text"  value={Epassword} onChange={handleEpassword} className="border border-black mb-2" placeholder="Password" /> <br />
                <input type="text" className="border border-black mb-2" placeholder="Confirm password" /> <br />
                <button onClick={handleuser} className="bg-yellow-400 text-black px-4">Sign Up</button>
                <p>Already have an account?<Link to={"/"} className="text-blue-600">  Login</Link></p>
            </div>
    </div>)
}
export default Signup 


// function Signup() {
//     return(
//         <div></div>
//     )
// }
// export default Signup