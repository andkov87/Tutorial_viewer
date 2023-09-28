import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from './component/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
