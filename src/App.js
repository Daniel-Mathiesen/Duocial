import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Footer from './Components/Footer'

function App() {
  const person = {name: "Daniel"}
  const title = "Welcome "+ person.name;

  return (
    <div className="App">
      <Navbar />
      <div className="test">
        <Home />
      </div>
    {/* <Footer /> */}
    </div>
  );
}

export default App;
