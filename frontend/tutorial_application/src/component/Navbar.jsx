import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark p-4">
                <Link to={"/"} className="navbar-brand fs-4">AndKov</Link>
                <div className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to={"/tutorials"} className="nav-link fs-5">Edit Tutorials</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/add"} className="nav-link fs-5">Add Tutorials</Link>
                    </li>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
