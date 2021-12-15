import React, { useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from "./firebase"
import { useHistory } from "react-router-dom"

function Login() {

    let history = useHistory();

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [user, setUser] = useState({})

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            alert("user");
        } catch (err) {
            alert(err.message);
        }
  };

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            alert("user");
        } catch (err) {
            alert(err.message);
        }
     };

    const logout = async () => { 
        await signOut(auth);
    };

    return (
        <>
            <div>
                <h3>Register</h3>
                <input
                    type="text"
                    placeholder="ENTER EMAIL"
                    onChange={(event) => {
                        setRegisterEmail(event.target.value);
                    }}
                />
                <input
                    type="password"
                    placeholder="ENTER PASSWORD"
                    onChange={(event) => {
                        setRegisterPassword(event.target.value);
                    }}
                />
                <button onClick={register}>Register</button>
            </div>
            <br />
            <br />
            <div>
                <h3>LOGIN</h3>
                <input
                    type="text"
                    placeholder="ENTER EMAIL"
                    onChange={(event) => {
                        setLoginEmail(event.target.value);
                    }}
                />
                <input
                    type="password"
                    placeholder="ENTER PASSWORD"
                    onChange={(event) => {
                        setLoginPassword(event.target.value);
                    }}
                />
                <button onClick={login} onClick={() => {
                    history.push("/")
                }}>Login</button>
            </div>

            <h4>USER LOGGED IN: {user?.email}</h4>
            <button onClick={logout}>Sign Out</button>
        </>
    );
}

export default Login;
