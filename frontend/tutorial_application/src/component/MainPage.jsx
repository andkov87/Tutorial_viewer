import Navbar from './Navbar'
import { Link } from 'react-router-dom';


const MainPage = () => {

    return (
        <>
            <Navbar />
            <div className='container'>
                <div className="row justify-content-center mt-5">
                    <div className="col-md-6">
                        <div className="input-group mb-5">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search by title"
                            /*value={searchTitle}*/ />
                            <div className="input-group-append">
                                <button
                                    className="btn btn-outline-secondary"
                                    type="button">Search</button>
                            </div>
                        </div>
                    </div>
                    <div className='row d-flex justify-content-evenly text-center'>
                    <div className="col-md-3">
                        <h4>Tutorials List</h4>

                        <ul className="list-group ">
                            <li className="list-group-item">
                            </li>
                        </ul>

                        <button className="m-3 btn btn-sm btn-danger">Remove All</button>
                    </div>
                    <div className="col-md-3">
                        <div>
                            <h4>Tutorial</h4>
                            <div>
                                <label>
                                    <strong>Title:</strong>
                                </label>{" "}
                            </div>
                            <div>
                                <label>
                                    <strong>Description:</strong>
                                </label>{" "}
                            </div>
                            <div>
                                <label>
                                    <strong>Status:</strong>
                                </label>{" "}
                            </div>

                            <Link
                                to={"/tutorials/"}
                                className="badge badge-warning">Edit
                            </Link>
                        </div>
                        <div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPage
