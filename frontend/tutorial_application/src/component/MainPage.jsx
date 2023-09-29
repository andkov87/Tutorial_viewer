import Navbar from './Navbar'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import useTutorialsData from '../hooks/useTutorialsData.js';
import {useTutorialContext} from '../hooks/TutorialContext'

import axiosInstance from '../AxiosConfig';


const MainPage = () => {

    const [tutorialData, fetchTutorialData] = useTutorialsData();
    const {selectedTutorial, setSelectedTutorial} = useTutorialContext();


    const handleItemClick = (tutorial) => {
        setSelectedTutorial(tutorial);
    }

    useEffect(() => {
        // This effect will run every time selectedTutorial changes
        console.log(selectedTutorial);
    }, [selectedTutorial]);

    const hadleDeleteTutorial = async () => {

        try {
            const respone = await axiosInstance.delete('/api/tutorials');
            console.log("successfully deleted", respone.data);
            fetchTutorialData();
        } catch (error) {
            console.error("error deleting:", error);
        }
    }


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
                        <div className="col-md-4">
                            <h4>Tutorials List</h4>

                            <ul className="list-group">
                                {tutorialData && tutorialData.length > 0 ? (
                                    tutorialData.map((tutorial) => (
                                        <li className={`list-group-item ${selectedTutorial && selectedTutorial.id === tutorial.id ? 'active' : ''} `}
                                            key={tutorial.id}
                                            onClick={() => handleItemClick(tutorial)}>
                                            {tutorial.title}
                                        </li>
                                    ))
                                ) : (
                                    <li className="list-group-item">No tutorials available</li>
                                )}
                            </ul>

                            <button className="m-3 btn btn-sm btn-danger"
                                    onClick={hadleDeleteTutorial}>Remove All</button>
                        </div>
                        <div className="col-md-3">
                            <div>
                                <h4>Tutorial</h4>
                                <div>
                                    <label>
                                        <strong>Title:</strong>
                                        {selectedTutorial ? selectedTutorial.title : "No title available"}
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <strong>Description:</strong>
                                        {selectedTutorial ? selectedTutorial.description : "No description available"}
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <strong>Status:</strong>
                                        {selectedTutorial ? (selectedTutorial.published ? "Published" : "Not published") : "No data available"}
                                    </label>
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
