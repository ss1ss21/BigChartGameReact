import { IoHome } from "react-icons/io5";
import { Navigate, useNavigate } from "react-router";
import "./chardsBar.css"

export default function ChardsBar() {
    const navigate = useNavigate();

    return (
        <>
            <nav className="chardsBar">
                <div id="container">
                    <div ><IoHome className="homeButton" onClick={() => navigate("/")} /></div>
                    <div style={{backgroundColor:'red'}}>context</div>
                    <div style={{backgroundColor:'blue'}}>sign in</div>
                </div>
            </nav>
        </>
    )
}