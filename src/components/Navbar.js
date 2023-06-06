import { NavLink } from "react-router-dom"

export function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg bg-primary'>
            <div className="container-md">
                <NavLink className='navbar-brand ' id="navbarNav" to="/">Home</NavLink>
                <div>
                    <ul className="navbar-nav">

                        <li className="nav-item "><NavLink className='nav-link active' to="/about">About</NavLink></li>
                        <li className="nav-item"><NavLink className='nav-link' to="/about/contact">Contact</NavLink></li>
                    </ul>
                </div>

            </div>

        </nav>
    )
}