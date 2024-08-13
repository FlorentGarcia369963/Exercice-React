
import { IRole } from '../../@types/authenticate';
import style from './RoleCard.module.scss'


const RoleCard = (role:IRole) =>{


    return (
        <article className={style.role_card}>
          <h2>{role.name}</h2>
          {role.is_staff && <p>Staff</p>}
          {/* <button>Modifier</button>
          <button>Supprimer</button> */}
                    
        </article>
      );
}

export default RoleCard