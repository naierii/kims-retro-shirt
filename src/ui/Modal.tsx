import style from './Modal.module.scss'
import ReactDOM from "react-dom"
import { AiOutlineCloseCircle,AiFillCaretLeft,AiFillCaretRight } from 'react-icons/ai'

interface Props{
  children: React.ReactNode;
  cb?: React.MouseEventHandler<HTMLDivElement>;
  nextHandler?: React.MouseEventHandler<HTMLDivElement>;
  prevHandler?: React.MouseEventHandler<HTMLDivElement>;
}

export default function Modal({children, cb, nextHandler, prevHandler}:Props){
  const modalRoot = document.getElementById('modal-root') as HTMLElement
  return <>{
    ReactDOM.createPortal(
      <div className={style.body}>
        <div onClick={cb} className={style.background}/>
        <div className={style.children}>
          {children}
        </div>
        <span onClick={cb} className={style.closeBtn}>
          <AiOutlineCloseCircle/>
        </span>

        <span onClick={prevHandler} className={style.sideBtn}>
          <AiFillCaretLeft/>
        </span>
        <span onClick={nextHandler} className={`${style.sideBtn} ${style.rightBtn}`}>
          <AiFillCaretRight/>
        </span>
      </div>
      ,modalRoot
    )}
  </>
}