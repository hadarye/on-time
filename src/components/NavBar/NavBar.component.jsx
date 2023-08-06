import './NavBar.styles.css'
import { Outlet } from 'react-router-dom';

const NavBar = () => {
    return (
      <div className="nav-bar-container">
        <div className="nav-bar"></div>
        <Outlet></Outlet>
      </div>
    );
}
  
export default NavBar;