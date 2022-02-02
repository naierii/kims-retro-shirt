import { useState } from 'react'
import { FaPaintBrush } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import style from './Header.module.scss'

export default function Header(){
  const [burgerIsActive, setBurgerIsActive] = useState(false);
  function burgerHandler(){
    setBurgerIsActive(cur => !cur);
  }
  return <>
    <header id={style.body}>
      <div id={style.centerBody}>

        <div id={style.burgerMenu} className={burgerIsActive ? style.active : ''}>
          <div id={style.burgerNav}>
            <NavLink className={style.burgerNavBtns} to="/home" onClick={burgerHandler}>Home •</NavLink>
            <NavLink className={style.burgerNavBtns} to="/art-folio" onClick={burgerHandler}>Art Folio •</NavLink>
            {/* <NavLink to="/portfolio" onClick={burgerHandler}>Portfolio •</NavLink>
            <NavLink to="/contacts" onClick={burgerHandler}>Contacts •</NavLink> */}
          </div>
        </div>

        <NavLink to="/home" id={style.logoContainer}><FaPaintBrush/></NavLink>
        <div onClick={burgerHandler} id={style.hamburgerIcon} className={`${burgerIsActive ? style.active : ''}`}>
          <div id={style.hamburgerBar}/>
        </div>
      </div>
    </header>
  </>
}