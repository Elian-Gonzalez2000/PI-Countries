import './App.css';
import Nav from "./components/Nav.js";
import Home from "./components/Home.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Init from './components/Init';
import CountryDetails from './components/CountryDetails';
import { FormActivity } from './components/FormActivities';

function App() {
  return (
        <div className="App">
     <Router>
         <Nav/>
        <Routes>
         <Route path="/" element={<Init/>} />
         <Route path="home" element={<Home />} />
         <Route path="home/:id" element={<CountryDetails />} />
         <Route path="activity" element={<FormActivity/>} />
        </Routes>
     </Router>
       </div>
  );
}

export default App;
