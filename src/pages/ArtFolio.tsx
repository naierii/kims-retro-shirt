import { NavLink, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import Hr from 'ui/Hr';
import style from './ArtFolio.module.scss';

import {RiArrowGoBackFill} from 'react-icons/ri';
import { useState } from 'react';
import Modal from 'ui/Modal';
import dummyArts from 'dummy/dummyArts';

export default function ArtFolio(){
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams();
  const folderName = searchParams.get('folderName')
  const imgName: string | any = searchParams.get('imgName')

  const artsList = dummyArts()

  const personalArt = artsList.find(artSection => artSection.name === 'Personal Art')
  const commissionArt = artsList.find(artSection => artSection.name === 'Commission Art')
  const commissionArtAnthro = artsList.find(artSection => artSection.name === 'Commission Art Anthro')

  function clickHandler(dir:string, imgName:string){
    setSearchParams({folderName:dir, imgName:imgName})
  }

  function backdropHandler(){
    navigate('/art-folio')
  }
  function nextHandler():void{
    const imgSection:any = artsList.find(i => i.folderName === folderName)
    const imgNames = imgSection?.imgNames;
    
    const currentPageIndex = imgNames.indexOf(imgName)
    if(currentPageIndex < imgNames.length-1){
      setSearchParams({
        folderName:imgSection.folderName,
        imgName:imgNames[currentPageIndex+1],
      })
    }else{
      setSearchParams({
        folderName:imgSection.folderName,
        imgName:'1',
      })
    }
  }
  function prevHandler():void{
    const imgSection:any = artsList.find(i => i.folderName === folderName)
    const imgNames = imgSection?.imgNames;
    
    const currentPageIndex = imgNames.indexOf(imgName)
    if(currentPageIndex > 0){
      setSearchParams({
        folderName:imgSection.folderName,
        imgName:imgNames[currentPageIndex-1],
      })
    }else{
      setSearchParams({
        folderName:imgSection.folderName,
        imgName:imgNames.length,
      })
    }
  }
  
  return <>
    {folderName && <Modal cb={backdropHandler} nextHandler={nextHandler} prevHandler={prevHandler}>
      <div id={style.modalImgCont}>
        <img src={`/images/art-folio/${folderName}/${imgName}.jpg`} alt={imgName}/>
      </div>
    </Modal>}
    <div id={style.body}>

      <section className={style.commonSection}>
        <h1>Kim's Retro Shirt</h1>
        <h6>Handpicked examples only, for more examples, see my contacts in the <NavLink to='/home'>home page</NavLink>.</h6>
      </section>

      <Hr/>

      <section className={style.commonSection}>
        <h3>Personal Art</h3>
        <h6>Want to see my personal works and original characters? Contact me!</h6>
        <div className={style.imgsCont}>
          {personalArt?.imgNames.map((imgName) => {
            return (
              <div key={personalArt.folderName+imgName} onClick={()=>clickHandler(personalArt.folderName,`${imgName}`)} className={style.imgCont}>
                <img src={`/images/art-folio/${personalArt.folderName}/${imgName}.jpg`} alt={`sample ${imgName}`}/>
              </div>
            )
          })}
        </div>
      </section>

      <section className={style.commonSection}>
        <h3>Commission Art</h3>
        <div className={style.imgsCont}>
          {commissionArt?.imgNames.map((imgName) => {
            return (
              <div key={commissionArt.folderName+imgName} onClick={()=>clickHandler(commissionArt.folderName,`${imgName}`)} className={style.imgCont}>
                <img src={`/images/art-folio/${commissionArt.folderName}/${imgName}.jpg`} alt={`sample ${imgName}`}/>
              </div>
            )
          })}
        </div>
      </section>

      <section className={style.commonSection}>
        <h3>Commission Art - Anthro</h3>
        <div className={style.imgsCont}>
          {commissionArtAnthro?.imgNames.map((imgName) => {
            return (
              <div key={commissionArtAnthro.folderName+imgName} onClick={()=>clickHandler(commissionArtAnthro.folderName,`${imgName}`)} className={style.imgCont}>
                <img src={`/images/art-folio/${commissionArtAnthro.folderName}/${imgName}.jpg`} alt={`sample ${imgName}`}/>
              </div>
            )
          })}
        </div>
        <h6>If you want more examples, please contact me!</h6>
      </section>

      <Hr/>

      <section className={style.commonSection}>
        <NavLink to='/home'><h2 id={style.return}><RiArrowGoBackFill/> Return</h2></NavLink>
      </section>
    </div>
  </>
}