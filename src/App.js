import LandingPage from './Pages/LandingPage';
import Misc from './Pages/Misc'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
    <Router>
       <Routes>
         <Route path='/misc' element={<Misc/>}/>
         <Route path='/' element={<LandingPage/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
