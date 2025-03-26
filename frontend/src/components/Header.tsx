import { NavLink } from "react-router";

function Header() {
    return (
        <>
            <nav className="navbar">
                <div>
                    <ul className="navbar-list">
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? `nav-link active` : 'nav-link'
                                }
                            >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/baseball"
                                className={({ isActive }) =>
                                    isActive ? `nav-link active` : 'nav-link'
                                }
                            >Baseball</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header
