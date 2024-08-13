export default function wizardRole(role:string){
    const roleTranslation:{[key:string]:string} = {
        student: 'Apprenti Sorcier',
        teacher: 'Professeur',
        headmaster: 'Directeur',
        caretaker: 'Gardien',
        librarian: 'Libraire'
    }

  return roleTranslation[role] || null


    
}


