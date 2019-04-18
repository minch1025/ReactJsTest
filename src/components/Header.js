import React from "react"
import { NavLink } from "react-router-dom"
import './Header.css';

//show the view on url 
class Header extends React.Component {
    render() {
        return (
            <div className="header">
            
                <NavLink exact to="/" className="item" activeClassName="active">Home</NavLink>
                <NavLink to="/about/logdemand" className="item" activeClassName="active">Demand Log</NavLink>
                {/* <Link to="/about/mincho">ログ詳細</Link> */}
                <NavLink to="/Posts" className="item" activeClassName="active">Detail Log</NavLink>
                <NavLink to="/login" className="item" activeClassName="active">Login</NavLink>

            </div>
        );
    }
}
export default Header;