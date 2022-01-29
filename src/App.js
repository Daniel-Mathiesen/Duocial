import Home from './Pages/Home';
import SignIn from './Pages/Signin';
import Plans from './Pages/Plans'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  const person = {name: "Daniel"}
  const title = "Welcome "+ person.name;

  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="test">
        <Switch>
          <Route exact path="/"> 
              <Home />
          </Route>
          <Route path="/signIn"> 
              <SignIn />
          </Route>
          <Route path="/plans"> 
              <Plans />
          </Route>
        </Switch>
      </div>
    {/* <Footer /> */}
    </div>
    </Router>
  );
}

export default App;
