import './Header.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios'

function Header() {
    const navigate = useNavigate();
    async function logout(e) {
        e.preventDefault();
        try {
            await axios.get("http://localhost:5000/api/user/logout", 
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            )
                .then(response => {
                    console.log(response.data);
                    alert('Logout thanh cong')
                    navigate("/login");
                })
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className='header'>
            <div className="navbar">
                <div className='logo'>
                    <img src={logo} alt="" />
                    <h1 style={{ marginBottom: "17px", fontSize: "4.8rem" }}>inmate</h1>
                </div>
                <div className='links-nav'>
                    <Link className='link-nav' to="/">Home</Link>
                    <Link className='link-nav' to="/products">Products</Link>
                    <Link className='link-nav' to="/portfolio">Portfolio</Link>
                    
                </div>
                <div className='btn-logout' onClick={logout}> Logout </div>
            </div>
            <div className='line'></div>
        </div>
    );
}

export default Header;