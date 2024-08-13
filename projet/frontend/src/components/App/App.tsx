import Header from './Header/Header';

import './App.scss';
import Footer from './Footer/Footer';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import NotFound from './Routes/NotFound';
import Staff from './Routes/Staff';
import Subjects from './Routes/Subjects';
import LoginPage from './Routes/LoginPage';
import {useIsAuth, useRoleDataContext } from './Context/AuthenticateContext';
import LoginRolesPage from './Routes/LoginRolesPage';
import Houses from './Routes/Houses';
import ClassesPage from './Routes/Classes';
import WizardsPage from './Routes/WizardsPage';
import RoomsPage from './Routes/RoomsPage';
import RolesPage from './Routes/RolesPage';






const App: React.FC = () => {
const {roleData}= useRoleDataContext()
const isStaff = roleData?.role?.is_staff
const {isAuth} = useIsAuth();
 console.log(isStaff);
 

  
  // const [authentification, setAuthentification] = useState<IAuthenticate|null>({wizard:null, token:null})

// console.log(authentification);


return (
  <div className="app">
    
    
        <Header />

        <Navbar />
        <Routes>
            <Route path="/" element={<Navigate to='/staff'/>} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/subjects" element={<Subjects />} />
            <Route path="/login" element={<LoginPage />} />
            {/* <Route path="/role" element={isAuth? <RolesPage/> : <LoginPage />} /> */}
            <Route path="/role" element={<LoginRolesPage/>} />
            <Route path='/houses' element={isStaff? <Houses/> : <LoginPage /> } />
            <Route path='/classes' element={isStaff? <ClassesPage/> : <LoginPage /> } />
            <Route path='/wizards' element={isAuth? <WizardsPage/> : <LoginPage /> } />
            <Route path='/rooms' element={isStaff? <RoomsPage/> : <LoginPage /> } />
            <Route path='/roles' element={isStaff? <RolesPage/> : <LoginPage /> } />
            <Route path="*" element={<NotFound />} />


        </Routes>

        <Footer />
    
  </div>
  );
}

export default App
