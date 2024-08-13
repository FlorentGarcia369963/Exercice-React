import './NavBar.scss';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { NavLink } from '../../../@types/navlink';
import {  useIsAuth, useRoleDataContext } from '../Context/AuthenticateContext';


const NavBar = () => {
  const [navLinks, setNavLinks] = useState<NavLink[] | null>(null);
  const location = useLocation();
const {isAuth} = useIsAuth()
const {roleData} = useRoleDataContext()

console.log(isAuth);
console.log(roleData);


const tokenRole = roleData?.token
const isStaff = roleData?.role?.is_staff





  


  

  useEffect(() => {
    const fetchNavLinks = async () => {
      console.log(isAuth);
      try {
        let response = null
if(!tokenRole){
  console.log(isAuth);
  
  response = await fetch(`${import.meta.env.VITE_API_URL}/nav-links`);
}else{
  response = await fetch(`${import.meta.env.VITE_API_URL}/nav-links`,{
        headers:{
          'Authorization' : `Bearer ${tokenRole}`
        }
      });
}

      
        const data = await response.json();
        console.log(data);
        
        if(!isStaff){
          setNavLinks(data.slice(0,2))
        }else{

          setNavLinks(data);
        }

      } catch (error) {
        console.error(error);
      }
    };

    fetchNavLinks();
  }, [tokenRole, isAuth, isStaff]);


  return (
    <nav>
      <ul>
        {navLinks && navLinks.map((navLink) => (
          <li key={navLink.url} className={navLink.url === location.pathname ? 'active' : ''}>
            <Link to={navLink.url}>{navLink.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;