import { useEffect, useState } from "react"
import axiosInstance from '../AxiosConfig';



const useTutorialsData = () => {
  const [tutorialData, setTutorialData] = useState(null);

  const fetchTutorialData = async () => {
    try {
      const response = await axiosInstance.get('/api/tutorials');
      const fetchedTutorialData = await response.data;
      setTutorialData(fetchedTutorialData);
      console.log("tutorials are fetched", response.data);

    } catch (error) {
      console.error("problem with fetching:", error);
    }
  }

  useEffect(() => {
    fetchTutorialData();
  }, [])

  return [tutorialData, fetchTutorialData];
}

export default useTutorialsData
