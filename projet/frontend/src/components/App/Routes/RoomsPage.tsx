import { useEffect, useState } from "react";
import { Room } from "../../../@types/room";
import RoomCard from "../../ui/RoomCard";
import style from './RoomsPage.module.scss';

const RoomsPage : React.FC = () =>{


    const [roomsData, setRoomData] = useState<Room[] | null>(null)

    useEffect(()=>{


        async function fetchData (){
    
            try {
                const response = await fetch (`${import.meta.env.VITE_API_URL}/rooms`)
            const data = await response.json()
            setRoomData(data)
            } catch (error) {
               console.error(error) 
            }
            
        }
    
        fetchData()
    },[])
        
        return(
            <main className={style.rooms_list}>
                {roomsData && roomsData.map((room)=>(
                   <RoomCard key={room.id} {...room} />
                    ))}

    </main>
)
}

export default RoomsPage