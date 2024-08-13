import { useEffect, useState } from "react";
import { House } from "../../../@types/house";
import HouseCard from "../../ui/HouseCard";
import style from './Houses.module.scss'

const Houses : React.FC = () =>{


    const [data, setData] = useState<House[] | null>(null)

    useEffect(()=>{


        async function fetchData (){
    
            try {
                const response = await fetch (`${import.meta.env.VITE_API_URL}/houses`)
            const data = await response.json()
            setData(data)
            } catch (error) {
               console.error(error) 
            }
            
        }
    
        fetchData()
    },[])
        
        return(
            <main className={style.houses_list}>
                {data && data.map((house)=>(
                   <HouseCard key={house.id} {...house} />
                    ))}

    </main>
)
}

export default Houses