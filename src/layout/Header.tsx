import { useState } from 'react'
import style from './Header.module.scss'

export default function Header(){
  const [burgerIsActive, setBurgerIsActive] = useState(true);
  function burgerHandler(){
    setBurgerIsActive(cur => !cur);
  }
  return <>
    <header id={style.body}>
      <div id={style.centerBody}>

        <div id={style.burgerMenu} className={burgerIsActive ? style.active : ''}>
          <div id={style.burgerNav}>
            <span>Home •</span>
            <span>About Me •</span>
            <span>Portfolio •</span>
            <span>Contacts •</span>
          </div>
        </div>

        <div id={style.logoContainer}>Logo</div>
        <div onClick={burgerHandler} id={style.hamburgerIcon} className={`${burgerIsActive ? style.active : ''}`}>
          <div id={style.hamburgerBar}/>
        </div>
      </div>
    </header>
  </>
}