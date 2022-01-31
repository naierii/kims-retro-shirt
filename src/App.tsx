import Header from 'layout/Header';
import Home from 'layout/Home';
import style from './App.module.scss';

function App() {
  return (
    <div id={style.app}>
      <Header/>
      <div id={style.mainBody}>
        <Home/>
      </div>
    </div>
  );
}

export default App;
