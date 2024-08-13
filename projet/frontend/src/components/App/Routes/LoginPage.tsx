import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.scss'
import { /*AuthenticateContext,*/useAuth,  useRoles, /*TokenContext,*/ /*UserContext*/ 
useIsAuth} from '../Context/AuthenticateContext';
import { IAuthenticate } from '../../../@types/authenticate';
import LoginFail from '../../ui/LoginFail';
// import { /*IAuthenticateContext,*/ IRolesContext, /*ITokenContext,*/ /*IAuthenticate*/ } from '../../../@types/authenticate';

function LoginPage(){
    const {authentification, setAuthentification} = useAuth()
   const {roles, setRoles} = useRoles()
   const {isAuth, setIsAuth} = useIsAuth()
   const navigate=useNavigate()
   const [loginFail, setLoginFail] = useState<boolean>(false)
        // const AuthContext = useContext<IAuthenticateContext|null>(AuthenticateContext)

      
        // const userContext = useContext(UserContext)
        // console.log(userContext);
        // console.log(userContext.setUser);
        
        

        // const [isAuth, setIsAuth] = useState<boolean>(false)
        const [gotRoles, setGotRoles] = useState<boolean>(false)
        // const jwtContext = useContext<ITokenContext|null>(TokenContext)
        // const rolesContext = useContext<IRolesContext|null>(RolesContext)
        // const {setAuthentification} = useContext(AuthenticateContext)

        // const token = jwtContext?.token
        // const setToken =jwtContext?.setToken
        // const roles = rolesContext?.roles
        // const setRoles =rolesContext?.setRoles
        // const setAuthentification = AuthContext?.setAuthentification
        // const authentification = AuthContext?.authentification
        // console.log(AuthContext);
        
        // console.log(setAuthentification);
        // console.log(setRoles);

        // const {setAuthentification} = AuthContext 

        // const {token, setToken} = jwtContext
        // const {roles, setRoles} = rolesContext
        

        


    /* const authenticate = async(formData:{[k: string]: FormDataEntryValue;})=>{
        // console.log(formData);
        
        try {
            const response = await fetch('http://localhost:3000/login',
                {
                    method:'POST',
                    headers:{'Content-Type': 'application/json'},
                
                    body: JSON.stringify({
                        email: formData.email,
                        password: formData.password,
                })
            }
            );
            if(!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data:IAuthenticate = await response.json();
            // C'est ici le problème !!! https://chatgpt.com/c/969339f6-6bba-4854-9121-802a5fed5d90
            setAuthentification(data)
            // const dataForExercise = {
            //     token: data.token,
            //     name: data.wizard.firstname,
            //     email: data.wizard.email
            // }
            // userContext.setUser(dataForExercise)
            setTimeout(()=>{

                console.log(authentification);
            },0)
            
            // console.log(dataForExercise);
            
           

            if(typeof setToken === 'function'){
                // console.log(data.token);
                
                setToken(data.token)
                // console.log('Token maj');
                0
            }
            
            // if(setAuthentification){
            // console.log(data);

            // setAuthentification(data)
            
            // console.log('Authentication state updated');
            
            
        // }
            // getWizardRoles(data.token)
            
            // console.log(data);
            
        } catch (error) {
            // console.log(error);
            
            
        }finally{
            
            navigate('/role')
            console.log(authentification);
            
        }
    } */
    
    

    // useEffect(()=>{
    //     if(userContext.user){
    //     console.log('le use effect est déclenché');
        
    //     console.log(userContext.user);}
        
    // },[userContext.user])


    // console.log(setAuthentification);
    // console.log(setRoles);


    const authenticate = async (email:string, password:string) => {
        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password:password,               
                 }),
            });
            if(!response.ok){
                 const errorData = await response.json()
                 setLoginFail(true)
                 return errorData
            }

            const data: IAuthenticate = await response.json();
            setIsAuth(true)
            setLoginFail(false)
            setAuthentification(data);

            
           
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
 

   const getWizardRoles= useCallback(async (token:string|null)=>{
    console.log('getWizardRoles activé');
    
console.log(token);
try {
    const response = await fetch('http://localhost:3000/wizard-roles',{
        headers:{
            Authorization: `Bearer ${token}`
        } ,
    });

    const data = await response.json();
    // console.log('data GWR :');
    return data
    // console.log(data);
    // if(setRoles){
    //     console.log('entré dans la condition setRoles');
        
    //     console.log(data);

        
    //         setRoles(data);
    //         setGotRoles(true);
        
    // }

    }catch(error){
        // console.log(error);
        
    }
},[])
// console.log(setAuthentification);
// console.log(setRoles);



// useEffect(()=>{
//     if(authentification){
//         // console.log(authentification.token);
        
//     getWizardRoles(authentification.token)
    
// }
// },[getWizardRoles, authentification])

// console.log(roles);
// const {authenticate} = useAuth()

const handleSubmit = async (formData:{[key:string]:FormDataEntryValue})=>{
    const email = formData.email as string;
    const password = formData.password as string;
         await authenticate(email,password);
        console.log(isAuth);
      
        
        
        
}



useEffect(()=>{

    if(authentification && authentification.token !== null){

    const checkAuthAndNavigate = async (token:string) =>{

        console.log('UseEffect auth activé');
        
            console.log(authentification);
            console.log(isAuth);
          const data = await getWizardRoles(token)

          console.log(data);
        //   let translatedRoleDatas = {}
        //   data.map((line)=>{
        //     console.log(wizardRole(line.name))
        //     translatedRoleDatas={
        //         id:line.id
        //         name: wizardRole()

        //   }
        //   )

          setRoles(data);
setGotRoles(true);
console.log(gotRoles);

console.log(roles);

navigate('/role')
            
        }

        checkAuthAndNavigate(authentification.token)
    }
    
},[isAuth, authentification, getWizardRoles, navigate, setRoles, setAuthentification])

// useEffect(()=>{
// console.log(`gotRoles avant: ${gotRoles}`);

//     if(roles !== null){
//         console.log(`gotRoles après: ${gotRoles}`);

//         console.log('useEffect roles activé');
//         console.log(roles);
        
        
//         navigate('/role')
//     }
// },[gotRoles, roles,navigate])



    return (
        <div className="form-container">
            <img src="../../../../public/poudlard.png" alt="" />
            <form className="login-form"
            onSubmit={(event:React.FormEvent<HTMLFormElement>)=>{
                event.preventDefault()
                // console.log(event.currentTarget);
                
                const formData = new FormData(event.currentTarget);
                // console.log(formData);
                
                const data = Object.fromEntries(formData)
                
                handleSubmit(data)

                // console.log(data);
                
                // authenticate(data)

                // console.log(roles);
                


            }}  >
                <label htmlFor="identifiant">Identifiant
                    <input className='login-form-input' id='identifiant' name='email' type="text" placeholder="Identifiant"/>
                </label>
                <label htmlFor="password">
                    Mot de passe
                    <input value={'poudlard'} className='login-form-input' type="password" id='password' name='password' placeholder="Mot de passe"/>
                </label>
                <button className='login-form-button' type="submit">Soumettre</button>
            </form>

            {loginFail && <LoginFail />}
            
                
            
            
            <div>Potter@poudlard.co.uk</div>
            <div>Black@poudlard.co.uk</div>
            <div>Snape@poudlard.co.uk</div>
            <div>Dumbledore@poudlard.co.uk</div>
        </div>
    )
}       

export default LoginPage;