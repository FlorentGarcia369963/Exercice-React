import { Class } from "../../@types/class";
import style from './ClassCard.module.scss'


const ClassCard = (classData:Class) =>{


    return (
        <article className={style.class_card}>
          <img src={classData.image} alt="" />
          <h2>{classData.name}</h2>
          <label>Niveau</label>
          <p>{classData.level}</p>
          
        </article>
      );
}

export default ClassCard