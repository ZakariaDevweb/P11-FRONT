import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Connexion from './Pages/connexion-deconnexion';
import User from './Pages/profil/ProfilePage';
import Error from './Pages/ErrorPages/ErrorPages';
import Home  from './Pages/Home/Home';

function App(){ 
    return (
        <Router>
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/connexion-deconnexion" element={<Connexion />} />
          <Route path="/profil" element={<User />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    )
}
export default App;