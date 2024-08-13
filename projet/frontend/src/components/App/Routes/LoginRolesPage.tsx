// import {  useEffect } from 'react'
import { IRole } from '../../../@types/authenticate'
import './LoginRolesPage.scss'
import { useAuth, useRoleDataContext, useRoles } from '../Context/AuthenticateContext';
import wizardRole from '../../../service/wizardRole';
import { useNavigate } from 'react-router-dom';

function LoginRolePage(){
    const {roles}=useRoles()
const {authentification} = useAuth()
console.log(authentification);

const {setRoleData} = useRoleDataContext()
console.log(roles);
const navigate = useNavigate()

let wizardLastname = ''
   if(authentification && authentification.wizard && authentification.wizard.lastname){
wizardLastname = authentification.wizard.lastname
   }

   async function handleClickOnRole(roleId:number, token:string){
console.log('handleClickOnRole activée');

try {
    const response = await fetch('http://localhost:3000/login-role',{
        method: 'POST',
        headers:{
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        } ,
        body:JSON.stringify({
            id: roleId,                     
         }),
    });

    const data = await response.json();
// setRoles(data.role)

setRoleData(data)
    console.log(data);
    console.log(data.role.is_staff);

    
    navigate('/')
    
    
} catch (error) {
    console.log(error);
    
}
    
   }







if(!authentification || !authentification.token || !roles){
    return(
        <div className="choose-role">
            <img src="../../../../public/poudlard.png" alt="" />
            <p className='choose-role-introduction'>Veuillez d'abord vous connecter</p>
            </div>
    )
}else{
    return (
        <div className="choose-role">
            <img src="../../../../public/poudlard.png" alt="" />
            {authentification?.wizard? <h2 className='choose-role-welcome'>Bienvenue M. {wizardLastname}</h2> : ''}
            <p className='choose-role-introduction'>continuer en tant que</p>
            
            { roles?.map((role:IRole)=>{
                console.log(role);
                
                return <button key={role.id} id={`${role.id}`} className='choose-role-button' 
                
                 onClick={()=>{
                    if(authentification && authentification.token && role.id){
                        handleClickOnRole(role.id, authentification.token)

                    }
                    
                    
                }}>{role.name? wizardRole(role.name): null} <img className='choose-role-button-img' src="../../../../public/fleche.png" alt=""  /></button>
            })}
            
            {/* <button className='choose-role-button'>Apprenti sorcier <img className='choose-role-button-img' src="../../../../public/fleche.png" alt="" /></button> */}
        </div>
    )

}
     
}

export default LoginRolePage