import style from './WideButton.module.scss'

interface Props{
  children: React.ReactNode;
  className?: string;
}

export default function WideButton({children, className}:Props){
  return <div className={`
    ${style.body}
    ${className}
  `}>
    {children}
  </div>
}