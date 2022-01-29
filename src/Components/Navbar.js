import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <div className="section-container">
                <a href="/" className="logo">Duocial</a>
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