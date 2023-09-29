import { useState } from "react"
import { Link } from 'react-router-dom';
import Navbar from "./Navbar"
import axiosInstance from '../AxiosConfig';

const AddTutorial = () => {

    const [newTutorial, setNewTutorial] = useState({
        title: '',
        description: ''
    });

    const handleInputChange = (e) => {
        setNewTutorial({ ...newTutorial, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axiosInstance.post('/api/tutorials', newTutorial);
            console.log("new tutorial added successfully", response.data);

            setNewTutorial({
                title: '',
                description: ''
            })
        } catch (error) {
            console.error("new tutorial not added:", error);
        }
    }

    return (
        <>
            <Navbar />
            <div className="container w-100 justify-content-center d-flex align-items-center">
                <div className="submit-form mt-5 w-25">
                    <div className="mb-5">
                        <h4 className="text-center fs-2">Add Tutorial!</h4>
                    </div>
                    <div>
                        <div className="form-group mb-4 fs-5">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                required
                                value={newTutorial.title}
                                onChange={handleInputChange}
                                name="title"
                            />
                        </div>

                        <div className="form-group mb-3 fs-5">
                            <label htmlFor="description">Description</label>
                            <input
                                type="text"
                                className="form-control"
                                id="description"
                                required
                                value={newTutorial.description}
                                onChange={handleInputChange}
                                name="description"
                            />
                        </div>

                        <button className="btn btn-success mr-4" onClick={handleSubmit}>
                            Submit
                        </button>
                        <Link
                            to={"/"}
                            className="btn btn-primary">Back
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddTutorial
