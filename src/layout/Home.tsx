import style from './Home.module.scss';

export default function Home(){
  return <>
  <div id={style.body}>
    <div id={style.me}>
      <div id={style.profilePic}>
        <img src="images/profile.jpg"/>
      </div>
      <h1>Kim's Retro Shirt</h1>
      <h4>Freelance Artist • 🇵🇭 • 1998</h4>
      <p>Hi! I'm Kim, welcome to my art shop!</p>
      <p>Hi! I'm Kim, welcome to my art shop!</p>
    </div>
  </div>
  </>
}