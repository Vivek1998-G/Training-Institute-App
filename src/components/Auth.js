import { axios } from "axios";
import { Log } from "./LogIn";
import { useState, useEffect, react } from 'react';
import jwt_decode from 'jwt-decode';
import { useNavigate } from "react-router";
import Dashboard from './dashboard';
export function Auth() {

    const google = window.google;
    const [user, setUser] = useState("")

    let navigate = useNavigate();
    function handleCallbackResponse(response) {
        console.log("Encoded jwt token" + response.credential)
        var userObject = jwt_decode(response.credential)
        console.log(userObject)
        setUser(userObject)
        navigate("/dashboard")
    }
    useEffect(() => {
        //global gooogle
        google.accounts.id.initialize({
            client_id: "109018719442-v3pf8i8gjob6m64l3p6i0a5fjag3515n.apps.googleusercontent.com",
            callback: handleCallbackResponse
        });
        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { size: "large" }
        );
    }, [])

    return (
        <div className='login'>
            <Log />
            <div id="signInDiv"></div>
            <div>
                <img src={user.picture}></img>
                <h3>{user.name}</h3>
            </div>

        </div>

    );
}
