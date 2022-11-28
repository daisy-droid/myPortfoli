
import './App.css';
import ContactForm from './components/contacts/contacts';
import Education from './components/Education/education';
import Landing from './components/landing-page/landing-page';
import Navbar from './components/navbar/navbar';
import Skillspage from './components/skills-page/skills';
//import {BrowserRouter as Router,Route,Switch } from 'react-router-dom'


function App() {
  return (
    //<Router>
    <div className="App">
      <div>
   <Navbar/>
       {/* <Route exact path="/landing-page" component={Landing}/>
       <Route exact path="/skills-page" component={Skillspage} />
       <Route exact path="/Education" component={  Education} />
       <Route exact path="/contacts" component={ ContactForm} />
       */}
       <Landing/>
       <Skillspage/>
       <Education/>
      <ContactForm/>
      </div>
    </div>
   // </Router>
  );
}

export default App;
