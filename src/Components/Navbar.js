import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <div className="section-container">
                <a href="/" className="logo">Duocial</a>
                <img className="burgerMenu" src="https://icon-library.com/images/white-menu-icon/white-menu-icon-4.jpg" alt="" />
                <nav>
                    <ul>
                        
                        <li><a href="#"><Link to="/">Home</Link></a></li>
                        <li><a href="#"><Link to="/plans">Plans</Link></a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#"><Link to="/signIn">Sign In</Link></a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
 
export default Navbar;