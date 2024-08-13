import { useEffect, useState } from "react";
import { Class } from "../../../@types/class";
import ClassCard from "../../ui/ClassCard";
import style from './Classes.module.scss'

const ClassesPage : React.FC = () =>{


    const [classesData, setClassesData] = useState<Class[] | null>(null)

    useEffect(()=>{


        async function fetchData (){
    
            try {
                const response = await fetch (`${import.meta.env.VITE_API_URL}/classes`)
            const data = await response.json()
            setClassesData(data)
            } catch (error) {
               console.error(error) 
            }
            
        }
    
        fetchData()
    },[])
        
        return(
            <main className={style.classes_list}>
                {classesData && classesData.map((classData)=>(
                   <ClassCard key={classData.id} {...classData} />
                    ))}

    </main>

    
)
}

export default ClassesPage