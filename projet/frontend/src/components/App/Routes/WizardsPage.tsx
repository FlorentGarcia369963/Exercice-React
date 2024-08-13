import { useEffect, useState } from "react";
import { Wizard } from "../../../@types/wizard"; 
import WizardCard from "../../ui/WizardCard";
import style from './WizardsPage.module.scss'
import { useRoleDataContext} from "../Context/AuthenticateContext";

const WizardsPage : React.FC = () =>{


    const [wizardsData, setWizardsData] = useState<Wizard[] | null>(null)

    const {roleData} = useRoleDataContext()
    const tokenRole = roleData?.token

    useEffect(()=>{


        async function fetchData (){
    
            try {
                const response = await fetch (`${import.meta.env.VITE_API_URL}/wizards`,{
                    headers:{
                        'Authorization': `Bearer ${tokenRole}`,
                }})
            const data = await response.json()
            console.log(data);
            
            setWizardsData(data)
            } catch (error) {
               console.error(error) 
            }
            
        }
    
        fetchData()
    },[tokenRole])
        
        return(
            <main className={style.wizards_list}>
                {wizardsData && wizardsData.map((wizardData)=>(
                   <WizardCard key={wizardData.id} {...wizardData} />
                    ))}

    </main>

    
)
}

export default WizardsPage