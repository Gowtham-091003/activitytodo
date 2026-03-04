import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"


function Login(Props) {

    const users=Props.users

    const navigate=useNavigate()
    const[Eusername,setEusername]=useState("")
    const[Epassword,setEpassword]=useState("")
    const[Ruser,setRuser]=useState(true)

function handleEusername(event) {
    setEusername(event.target.value)
}
function handleEpassword(event) {
    setEpassword(event.target.value)

}

function handleuser() {
    var userfound = false
    users.forEach(function(item) {
        if (item.username == Eusername && item.password == Epassword) {
            console.log("Login Succesfil")
            userfound = true
            navigate("/landing",{state:{user:Eusername}})
        
        }
        if (userfound == false)
        {
            console.log("Login Failed")
            setRuser(false)
        }
    })
}
    return(<div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-xl font-medium">Hayy Hi</h1>
                {Ruser?<p className="mb-2">I help you manage activities after you login :)</p>:<p className="text-red-700">Please signup before you Login</p>}
                <input type="text" value={Eusername} onChange={handleEusername} className="border border-black mb-2" placeholder="username" /> <br />
                <input type="text" value={Epassword} onChange={handleEpassword} className="border border-black mb-2" placeholder="Password" /> <br />
                <button  onClick={handleuser}className="bg-violet-500 text-black px-4">Login</button>
                <p>Already have an account?<Link to={"/signup"} className="text-violet-500">  SignUp</Link></p>
            </div>
    </div>)
}
export default Login


// function Login() {
//     return(
//         <div></div>
//     )
// }
// export default Login