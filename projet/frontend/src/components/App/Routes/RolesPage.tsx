import { useEffect, useState } from "react";
import RoleCard from "../../ui/RoleCard";
import style from './RolesPage.module.scss'
import { IRole } from "../../../@types/authenticate";

const RolesPage : React.FC = () =>{


    const [rolesData, setRolesData] = useState<IRole[] | null>(null)

    useEffect(()=>{


        async function fetchData (){
    
            try {
                const response = await fetch (`${import.meta.env.VITE_API_URL}/roles`)
            const data = await response.json()
            
            setRolesData(data)
            } catch (error) {
               console.error(error) 
            }
            
        }
    
        fetchData()
    },[])
        
        return(
            <main className={style.roles_list}>
                {rolesData && rolesData.map((role)=>(
                   <RoleCard key={role.id} {...role} />
                    ))}

    </main>
)
}

export default RolesPage