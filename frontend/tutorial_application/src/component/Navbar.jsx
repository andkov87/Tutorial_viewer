import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <Link to={"/"} className="navbar-brand">AndKov</Link>
                <div className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to={"/tutorials"} className="nav-link">Edit Tutorials</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/add"} className="nav-link">Add Tutorials</Link>
                    </li>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
