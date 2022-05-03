import "./App.css";
import Nav from "./components/Nav.js";
import Home from "./components/Home.js";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Init from "./components/Init";
import CountryDetails from "./components/CountryDetails";
import { FormActivity } from "./components/FormActivities";
import styled from "styled-components";

export const Footer = styled.footer`
   background-color: var(--gray-dark-color);
   color: var(--text-light-color);
   display: flex;
   justify-content: center;
   width: 100vw;
   padding: 3rem 0;
`;

function App() {
   return (
      <div className="App">
         <Router>
            <Nav />
            <Routes>
               <Route path="/index" element={<Init />} />
               <Route path="/home" element={<Home />} />
               <Route path="/home/:id" element={<CountryDetails />} />
               <Route path="/activity" element={<FormActivity />} />
            </Routes>
            <Footer>
               <p className="text-center">
                  &copy; ecgonzalez | Todos los derechos reservados
               </p>
            </Footer>
         </Router>
      </div>
   );
}

export default App;
