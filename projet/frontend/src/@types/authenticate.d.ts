export interface IWizard {
    id: number |null;
    lastname: string |null;
    firstname: string |null;
    birthdate: string |null;
    email: string |null;
    class_id: number | null;
    house_id: number | null;
    image: string |null;
    created_at: string |null;
    updated_at: string |null;
}

export interface IAuthenticate {
    wizard:IWizard|null;
    token:string|null;
}

export interface IAuthenticateContext {
    authentification: IAuthenticate|null;
    setAuthentification:  React.Dispatch<React.SetStateAction<IAuthenticate | null>>
    /*authenticate: (email: string, password: string)=>Promise<void>*/
}

export interface ITokenRoleContext{
    tokenRole:string|null;
    setTokenRole:React.Dispatch<React.SetStateAction<string | null>>
}

export interface IRole{
    name: string |null;
    id: number | null;
    is_staff: boolean | null
}

export interface IRolesContext{
    roles:IRole[]|null;
    setRoles:React.Dispatch<React.SetStateAction<IRole[] | null>>
}

export interface IRoleData{
    role:IRole | null;
    token: string | null;
    wizard: IWizard | null;
}

export interface IRoleDataContext{
    roleData: IRoleData | null;
    setRoleData: React.Dispatch<React.SetStateAction<IRoleData>>
}

export interface UserContextType {
    user:AuthUser | null | undefined;
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null | undefined>>;
}

export interface IIsAuthContext{
    isAuth: boolean;
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IIsStaffContext{
    isStaff: boolean;
    setIsStaff: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IChosenRoleContext{
    chosenRole: IRole | null;
    setChosenRole: React.Dispatch<React.SetStateAction<IRole>>
}