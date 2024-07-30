import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Connexion from './Pages/Connexion/Connexion';
import Profil from './Pages/Profil/Profil';
import Error from './Pages/ErrorPages/ErrorPages';
import Home  from './Pages/Home/Home';

function App(){ 
    return (
        <Router>
       <header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/connexion-deconnexion" element={<Connexion />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <footer/>
      </Router>
    )
}
export default App;