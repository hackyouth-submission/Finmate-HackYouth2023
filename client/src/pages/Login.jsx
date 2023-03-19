import '../components/css/Style.css'
import logo from '../assets/logo.png'
import axios from 'axios'
import { useRef, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Login() {
    const signUp = () => {
        if (document.getElementById('container')) {
            return document.getElementById('container').classList.add("right-panel-active");
        }
    }
    const signIn = () => {
        if (document.getElementById('container')) {
            return document.getElementById('container').classList.remove("right-panel-active");
        }
    };

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')

    const navigate = useNavigate();

    async function submit(e) {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/user/login", { email, password })
                .then(response => {
                    console.log(response.data);
                    navigate("/");
                })
        } catch (err) {
            console.log(err)
            alert('Invalid Login !!!')
        }
    }
    async function register(e) {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/user/register", { name, mobile , email, password })
                .then(response => {
                    console.log(response.data);
                    document.getElementById('container').classList.remove("right-panel-active");
                })
        } catch (err) {
            console.log(err)
            alert('Invalid Register !!!')
        }
    }

    return (
        <div className='login'>
            <div className='logo'>
                <img src={logo} alt="" />
                <h1>inmate</h1>
            </div>
            <h2 className='title-login'>Transparent crowdfunding for a better future</h2>
            <div className="container" id="container">
                <div className="form-container sign-up-container">
                    <form>
                        <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>Create Account</h1>
                        <input
                            type="text"
                            placeholder="Name"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="mobile"
                            placeholder="Mobile"
                            onChange={(e) => setMobile(e.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button style={{ marginTop: "20px" }} onClick={register}>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form>
                        <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>Sign in</h1>
                        <input
                            type="email"
                            placeholder="Email"
                            style={{ borderRadius: "15px" }}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            style={{ borderRadius: "15px" }}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button style={{ marginTop: "20px" }} onClick={submit}>Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1 style={{ fontSize: "3rem", marginBottom: "20px" }} >Welcome Back!</h1>
                            <p style={{ fontWeight: "bold" }}>To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn" onClick={signIn}>Log In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1 style={{ fontSize: "3rem" }}>Hello, Friend!</h1>
                            <p style={{ fontWeight: "bold" }}>Enter your personal details and start journey with us</p>
                            <button className="ghost" id="signUp" onClick={signUp}>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;