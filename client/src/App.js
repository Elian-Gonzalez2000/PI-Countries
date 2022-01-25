import './App.css';
import Nav from "./components/Nav.js";
import Home from "./components/Home.js";
import { Route,BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
     <div className="App">
      {/* <Router> */}
      <h1>Henry Countries</h1>
      <Home />
      {/* <Route exact path="/" > 
      <Home />
      </Route>
          <Route path="/movie/:id">
             <Nav/>
          </Route> */}

    </div>
      /* </Router> */
  );
}

export default App;
