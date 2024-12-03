import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './Views/homepage'
import Information from './Views/informacion'
import Login from './Views/login'
import MyProfile from './Views/miperfil'
import MyReservations from './Views/misreservas'
import Register from './Views/registro'
import MakeReservation from './Views/tomahoracentro'
import Soporte from './Views/soporte'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" Component={Login} />
        <Route path="/" Component={Login} />
        <Route path="/homepage" Component={HomePage} />
        <Route path="/information" Component={Information} />
        <Route path="/login" Component={Login} />
        <Route path="/myprofile" Component={MyProfile} />
        <Route path="/myreservations" Component={MyReservations} />
        <Route path="/register" Component={Register} />
        <Route path="/makereservation" Component={MakeReservation} />
        <Route path="/support" Component={Soporte} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
