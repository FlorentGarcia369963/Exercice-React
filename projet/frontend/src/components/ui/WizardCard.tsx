import { Wizard } from '../../@types/wizard';
import style from './WizardCard.module.scss'


const WizardCard = (wizardData:Wizard) =>{


  const birthDate = new Date(wizardData.birthdate).toLocaleDateString()
  console.log(birthDate);
  

    return (
        <article className={style.wizard_card}>
          <img src={wizardData.image} alt="" />
          <h2>{wizardData.firstname} {wizardData.lastname}</h2>
          <label>Date d'anniversaire</label>
          <p>{birthDate}</p>
          <label >Email</label>
          <p>{wizardData.email}</p>
          
        </article>
      );
}

export default WizardCard