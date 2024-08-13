import { Room } from '../../@types/room'; 
import style from './RoomCard.module.scss'


const RoomCard = (roomData:Room) =>{


    return (
        <article className={style.room_card}>
          <img src={roomData.image} alt="" />
          <h2>{roomData.name}</h2>
          <label>Building</label>
          <p>{roomData.building}</p>
          <label>Etage</label>
          <p>{roomData.floor}</p>
          <label>Numéro</label>
          <p>{roomData.number}</p>
          
        </article>
      );
}


export default RoomCard