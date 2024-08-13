import { useContext/*, useState */} from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
// import { ThemeContext } from '../Context/ThemeContext';
import { AuthenticateContext, useAuth } from '../Context/AuthenticateContext';
import { /*IAuthenticate,*/ IAuthenticateContext } from '../../../@types/authenticate';

// interface HeaderProps {
//   themeColor:string;
//   setThemeColor:React.Dispatch<React.SetStateAction<string>>;
// }



const Header = (/*{themeColor, setThemeColor}:HeaderProps*/) => {
  const {authentification} = useAuth()

  // const {themeColor, setThemeColor} = useContext(ThemeContext)


  let wizardFirstname='';
  let wizardLastname=''
if(authentification && authentification.wizard){
  
  wizardFirstname = authentification.wizard.firstname
  wizardLastname = authentification.wizard.lastname
}
  console.log(authentification);


  
  
  
 
  
  

  return (
    <header>
      <Link to="/">
        <img src="/poudlard.png" alt="Logo de Poudlard" />
      </Link>

      {/* <button className={`theme-${themeColor}`}
      onClick={()=>{
        setThemeColor('dark')}} >COUCOU</button> */}

      <h1>Poudlard's portal</h1>

      {authentification?.wizard? <div>Bienvenue M. {wizardFirstname} {wizardLastname}</div> : ''}

      

      <Link to="/login">
        <img src="/locked.png" alt="" />
      </Link>
    </header>
  );
}

export default Header;
