import { ReactNode, createContext, useContext, useState } from "react";
import {IAuthenticate, IAuthenticateContext, IIsAuthContext, IIsStaffContext, IRole, IRolesContext, ITokenRoleContext, IChosenRoleContext, IWizard, IRoleDataContext, IRoleData } from "../../../@types/authenticate";



const defaultAuth: IAuthenticate ={
    wizard: null,
    token: null
}
const defaultContext:IAuthenticateContext ={
    authentification: defaultAuth,
    setAuthentification:()=>{},
    /*authenticate:async () =>{}*/
};


const defaultTokenRoleContext:ITokenRoleContext={
    tokenRole:null,
    setTokenRole:()=>{}
}

const defaultRoles:IRole[]= [{name:null, id:null, is_staff:null}]



const defaultRolesContext:IRolesContext={
    roles:defaultRoles,
    setRoles:()=>{}

}
// type AuthUser = {
//     email:string;
//     name:string;
//     token:string   
// }



// type UserContextProviderType = {
//     children : React.ReactNode
// }

// export const UserContext= createContext({} as UserContextType)

// export const UserContextProvider = ({children} : UserContextProviderType) => {
//     const [user, setUser] = useState<AuthUser | null>();
//     return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
// }
interface AuthenticateContextProviderType  {
    children: ReactNode
}

export const AuthenticateContext = createContext<IAuthenticateContext>(defaultContext);

export const useAuth = () => useContext(AuthenticateContext);

// export const AuthProvider= ({children}:AuthenticateContextProviderType)

export const AuthProvider =({ children}: AuthenticateContextProviderType)   => {
    const [authentification, setAuthentification] = useState<IAuthenticate|null>(defaultAuth);
    

    return (
        <AuthenticateContext.Provider value={{ authentification, setAuthentification, /*authenticate*/ }}>
            {children}
        </AuthenticateContext.Provider>
    );
};

export const TokenRoleContext = createContext<ITokenRoleContext>(defaultTokenRoleContext)
export const useTokenRole = () => useContext(TokenRoleContext)
export const TokenRoleProvider :React.FC<{ children: ReactNode }> = ({ children }) => {
    const [tokenRole, setTokenRole] = useState<string| null>(null);

    return (
        <TokenRoleContext.Provider value={{tokenRole, setTokenRole }}>
            {children}
        </TokenRoleContext.Provider>
    );
};


export const RolesContext = createContext<IRolesContext>(defaultRolesContext)

export const useRoles = () => useContext(RolesContext);


// Composant Provider pour le contexte des rôles
export const RolesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [roles, setRoles] = useState<IRole[]| null>(null);

    return (
        <RolesContext.Provider value={{ roles, setRoles }}>
            {children}
        </RolesContext.Provider>
    );
};

const defaultIsAuthContext ={
    isAuth: false,
    setIsAuth: ()=>{}
}

export const isAuthContext = createContext<IIsAuthContext>(defaultIsAuthContext)

export const useIsAuth = () =>useContext(isAuthContext)

export const IsAuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isAuth, setIsAuth] = useState<boolean>(false);

    return (
        <isAuthContext.Provider value={{ isAuth, setIsAuth }}>
            {children}
        </isAuthContext.Provider>
    );
};

const defaultIsStaffContext = {
    isStaff: false,
    setIsStaff: ()=>{}
}

export const isStaffContext = createContext<IIsStaffContext>(defaultIsStaffContext)

export const useIsStaff = ()=> useContext(isStaffContext)

export const IsStaffProvider: React.FC<{children:ReactNode}> = ({children}) =>{
const [isStaff, setIsStaff] = useState<boolean>(false)

return(
    <isStaffContext.Provider value = {{isStaff,setIsStaff}}>
        {children}
    </isStaffContext.Provider>
)

}

const defaultChosenRole={
    name:null,
    is_staff:null,
    id:null
}

const defaultChosenRoleContext = {
    chosenRole: defaultChosenRole,
    setChosenRole: ()=>{}
}

export const ChosenRoleContext = createContext<IChosenRoleContext>(defaultChosenRoleContext)

export const useChosenRole = ()=> useContext(ChosenRoleContext)

export const ChosenRoleProvider: React.FC<{children:ReactNode}> = ({children}) =>{
    const [chosenRole, setChosenRole] = useState<IRole>(defaultChosenRole)
    
    return(
        <ChosenRoleContext.Provider value = {{chosenRole, setChosenRole}}>
            {children}
        </ChosenRoleContext.Provider>
    )
    
    }

    const defaultRole: IRole = {
        id: null,
        is_staff: false,
        name: null
    }

    const defaultWizard: IWizard={
        id:null,
        firstname: null,
        lastname : null,
        birthdate: null,
        image:null,
        email:null,
        class_id: null,
        house_id: null,
        created_at: null,
        updated_at: null
    }

    const defaultRoleData = {
        role: defaultRole,
        token: null,
        wizard: defaultWizard,       
    }

    const defaultRoleDataContext = {
        roleData: defaultRoleData,
        setRoleData: ()=>{}
    }

    export const RoleDataContext = createContext<IRoleDataContext>(defaultRoleDataContext)
    export const useRoleDataContext = () =>useContext(RoleDataContext)

    export const RoleDataProvider: React.FC<{children:ReactNode}> = ({children}) =>{
        const [roleData, setRoleData] = useState<IRoleData>(defaultRoleData)

        
        return(
            <RoleDataContext.Provider value = {{roleData, setRoleData}}>
                {children}
            </RoleDataContext.Provider>
        )
        
        }