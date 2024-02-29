import CartWidget from '../cartWidget/CartWidget';
import './navbar.css'
const Navbar = () => {
    return (
        <div>
            <nav className='navContainer'>
                <a className='linkLogo' href="/">
                    <img className='logo' src="./images/logoSinFondo.png" alt="logo" />
                </a>
                <div className='linksContainer'>
                <a className='link' href="/">Las mas vendidas</a>
                <a className='link' href="/">Interior</a>
                <a className='link' href="/">Jardin</a>
                <a className='link' href="/">Productos de jardinería</a>
                <CartWidget/>                    
                </div>
                
            </nav>
        </div>
    )
}

export default Navbar;
