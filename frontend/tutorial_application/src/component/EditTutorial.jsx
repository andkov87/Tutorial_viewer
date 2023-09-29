import Navbar from "./Navbar"
import { useState } from "react"
import { useTutorialContext } from '../hooks/TutorialContext'
import axiosInstance from '../AxiosConfig'
import { useNavigate } from "react-router-dom"

const EditTutorials = () => {
    const navigate = useNavigate();

    const { selectedTutorial, setSelectedTutorial } = useTutorialContext();

    const initialTutorialState = {
        title: selectedTutorial ? selectedTutorial.title : '',
        description: selectedTutorial ? selectedTutorial.description : '',
    }

    const [tutorial, setTutorial] = useState(initialTutorialState);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTutorial({
            ...tutorial,
            [name]: value,
        });
    }

    const handleUpdate = async () => {
        try {
            const response = await axiosInstance.put(`/api/tutorials/${selectedTutorial.id}`, tutorial);
            console.log("Tutorial updated successfully:", response.data);
            setSelectedTutorial(null);
            navigate('/');

        } catch (error) {
            console.error("Error updating tutorial:", error);
        }
    }

    const handleDeleteTutorial = async () => {
        try {
            const response = await axiosInstance.delete(`/api/tutorials/${selectedTutorial.id}`);
            setSelectedTutorial(null);
            navigate('/');
            console.log("Tutorial deleted successfully:", response.data);
        } catch (error) {
            console.error("Error in deleting:", error);
        }
    }

    const handlePublished = async () => {
        try {
            const response = await axiosInstance.put(`/api/tutorials/${selectedTutorial.id}`, {
                ...selectedTutorial,
                published: true,
            });
            setSelectedTutorial({ ...selectedTutorial, published: true });
            setTutorial({ ...tutorial, published: true })
            console.log("Tutorial published successfully:", response.data);
        } catch (error) {
            console.error("Error publishing tutorial:", error);
        }
    }

    const handleUnpublished = async () => {
        try {
            const response = await axiosInstance.put(`/api/tutorials/${selectedTutorial.id}`, {
                ...selectedTutorial,
                published: false,
            });
            setSelectedTutorial({ ...selectedTutorial, published: false });
            setTutorial({ ...tutorial, published: false })
            console.log("Tutorial unpublished successfully:", response.data);
        } catch (error) {
            console.error("Error unpublishing tutorial:", error);
        }
    }



    return (
        <>
            <Navbar />
            <div className="container d-flex justify-content-center mt-5">
            <div className="edit-form">
                <h4 className="mb-5 fs-2">Tutorial</h4>
                <form>
                    <div className="form-group w-100">
                        <label className="fs-5" htmlFor="title">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            value={tutorial.title}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group w-100">
                        <label className="fs-5" htmlFor="description">Description</label>
                        <input
                            type="text"
                            className="form-control"
                            id="description"
                            name="description"
                            value={tutorial.description}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label className="fs-5">
                            <strong>Status: </strong>
                            {selectedTutorial.published ? "published" : "not published"}
                        </label>
                    </div>
                </form>

                <button
                    className="badge badge-primary fs-6 mr-2 "
                    onClick={handleUnpublished}
                >
                    UnPublish
                </button>

                <button
                    className="badge badge-primary fs-6 mr-2"
                    onClick={handlePublished}
                >
                    Publish
                </button>

                <button
                    className="badge badge-danger fs-6 mr-2"
                    onClick={handleDeleteTutorial}
                >
                    Delete
                </button>

                <button
                    type="submit"
                    className="badge badge-success fs-6"
                    onClick={handleUpdate}
                >
                    Update
                </button>
            </div>
            </div>
        </>
    )
}


export default EditTutorials