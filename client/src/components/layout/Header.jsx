import './Header.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

function Header() {
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
                    <Link className='link-nav' to="/products/create">Create</Link>
                </div>
            </div>
            <div className='line'></div>
        </div>
    );
}

export default Header;