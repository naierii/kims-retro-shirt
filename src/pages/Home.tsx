import WideButton from 'WideButton';
import style from './Home.module.scss';
import { FaShoppingCart, FaPaintBrush } from 'react-icons/fa';
import { AiFillInstagram, AiFillStar } from 'react-icons/ai';
import { ImCheckmark, ImTwitter } from 'react-icons/im';
import { BsGlobe2 } from 'react-icons/bs';
import { HiMail } from 'react-icons/hi';
import { SiKofi, SiLinktree } from 'react-icons/si';
import Hr from 'ui/Hr';
import { NavLink } from 'react-router-dom';

export default function Home(){
  return <>
  <div id={style.body}>

    <section id={style.me}>
      <div id={style.profilePic}>
        <img src="images/profile.jpg"/>
      </div>
      <h1>Kim's Retro Shirt</h1>
      <h4>Freelance Artist • 🇵🇭 • 1998</h4>
      <p>Hi! I'm Kim, welcome to my art shop!</p>
    </section>

    <Hr/>

    <section className={style.commonSection}>
      <h1>• Art Commissions •</h1>
      <div id={style.redirBtnCont}>
        <a href="https://drive.google.com/file/d/1huZ2bDb7MIj4cGUoc5QSM_BvP6kIcaFR/view?usp=drivesdk">
          <WideButton>
            <FaShoppingCart/> Prices and Terms of Service
          </WideButton>
        </a>
        <a href="https://drive.google.com/folderview?id=1C2pMR9gndRCir56mB71v4HbTytLjtWRk">
          <WideButton>
            <AiFillStar/> Reviews
          </WideButton>
        </a>
        <a href="https://tablenotes.net/public/-MgpMvIZBC4s30iutjyk">
          <WideButton>
            <ImCheckmark/> Queue / To do list
          </WideButton>
        </a>
      </div>
    </section>

    <Hr/>

    <section className={style.commonSection}>
      <h1>• Art Folio •</h1>
      <img className={style.sectionImgs} src="images/home/artfolio.gif"/>
      <WideButton>
        <NavLink id={style.artFolioNavLink} to="/art-folio">
          <FaPaintBrush/> Art Gallery
        </NavLink>
      </WideButton>
      <h6>Want even more examples? Contact me!</h6>
    </section>

    <Hr/>

    <section className={style.commonSection}>
      <h1>TIMEZONE</h1>
      <h6>
        Remember! I live far outside of US. I live in Southeast Asia. In case I haven't responded immediately, it may mean I'm asleep or working. Thank you for understanding.
      </h6>
      <a href="https://www.timeanddate.com/worldclock/philippines">
        <WideButton>
          <BsGlobe2/> Philippine Time (UTC +8)
        </WideButton>
      </a>
    </section>

    <Hr/>

    <section className={style.commonSection}>
      
      <h1>CONTACTS</h1>
      
      <h6> 
        Want to see more of my works? Check me out in these sites!
        <br/> Email shown is NOT my PayPal email
      </h6>

      <a href='https://mail.google.com/mail/u/?authuser=KIMS.RETRO.SHIRT@GMAIL.COM'>
        <WideButton>
          <HiMail/> kims.retro.shirt@gmail.com
        </WideButton>
      </a>
      <a href='https://instagram.com/kims_retro_shirt'>
        <WideButton>
          <AiFillInstagram/> Instagram : @kims_retro_shirt
        </WideButton>
      </a>
      <a href='https://instagram.com/kims_retro_shirt'>
        <WideButton>
          <ImTwitter/> Twitter : @KimsRetroShirt
        </WideButton>
      </a>
      <h6>Or my list of full contacts</h6>
      <a href='https://linktr.ee/KimsRetroShirt'>
        <WideButton>
          <SiLinktree/> LinkTree : All accounts
        </WideButton>
      </a>

    </section>

    <Hr/>

    <section className={style.commonSection}>
      <h3>Support me!</h3>
      <a href='https://ko-fi.com/krs98'>
        <WideButton>
          <SiKofi/> Buy me a Coffee
        </WideButton>
      </a>
      <img className={style.sectionImgs} src='images/home/closing-message.png' alt="Made with love"/>
    </section>

  </div>
  </>
}