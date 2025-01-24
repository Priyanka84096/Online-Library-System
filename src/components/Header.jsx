import { Link } from 'react-router-dom';
import { IoBookSharp } from "react-icons/io5";

function Header() {
    return (
        <header className="header">
          <nav className="navbar">
              <Link to="/" className="logo"><IoBookSharp className="logo-icon" /><sup> Online Library</sup></Link>
              {/* <div className='navlinks'> */}
                <ul>
                    <Link to="/" >Home</Link>
                    <Link to="/books" >Browse Books</Link>
                    <Link to="/add-book" >Add Book</Link>
                </ul>
                {/* </div> */}
          </nav>
        </header>
    );
}
export default Header;