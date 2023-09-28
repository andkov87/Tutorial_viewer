import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from './component/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddTutorial from './component/AddTutorial';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/add' element={<AddTutorial/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
