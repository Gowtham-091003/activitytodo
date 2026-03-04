import Card from "../components/Card"
import Header from "../components/Header"
import Todocomponents from "../components/Todocomponents"
import { useLocation } from "react-router-dom";

function Landing() {
    const data = useLocation()

    return(
        <div className="bg-black p-16 ">
    <div className="bg-[#EFEFEF] p-10 border rounded-md">
        {<Header name={data.state.user}></Header>}
        <div className="flex justify-between gap-7 my-5 flex-wrap">
            <Card backgroundColor={"#8272DA"} title={"23"} subtitle={"Chennai"}></Card>
            <Card backgroundColor={"#FD6663"} title={"March"} subtitle={"15:33:12"}></Card>
            <Card backgroundColor={"#FCA201"} title={"Built using"} subtitle={"React"}></Card>
        </div>
        <Todocomponents></Todocomponents>
    </div>
  </div>
  
  );
}
export default Landing