import { Navigate, useNavigate } from "react-router-dom"
import './home.css'

export default function Home(){
    const navigate = useNavigate();

    return(
        <>
        <body>
            <h1 style={{position:"absolute", top:"20%", left:"30%"}} >wecome to the chart game</h1>
            <div className="login">
                <button onClick={()=> navigate("/chartlist")}>Sign in</button>
                <button onClick={()=> navigate("/chartlist")}>Sign up</button>

            </div>
            {/* <button onClick={()=> navigate("/chartlist")}>Start</button> */}
            
        </body>
        </>
    )
}