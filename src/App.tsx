import Header from 'layout/Header';
import ArtFolio from 'pages/ArtFolio';
import Home from 'pages/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import Modal from 'ui/Modal';
import style from './App.module.scss';

function App() {
  return (
    <div id={style.app}>
      <Header/>
      <div id={style.mainBody}>
        <div id={style.maxedWidth}>
          <Routes>
            <Route path='/' element={<Navigate to='/home'/> }/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/art-folio' element={<ArtFolio/>}/>
            <Route path='*' element={<div> 404 Page Not Found </div> }/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
