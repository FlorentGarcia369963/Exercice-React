import { House } from "../../@types/house";
import style from './HouseCard.module.scss'


const HouseCard = (house:House) =>{


    return (
        <article className={style.house_card}>
          <img src={house.image} alt="" />
          <h2>{house.name}</h2>
          <label>Batiment</label>
          <p>{house.building}</p>
          <label>Etage</label>
          <p>{house.floor}</p>
        </article>
      );
}

export default HouseCard