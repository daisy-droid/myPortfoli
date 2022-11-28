
import './App.css';
import ContactForm from './components/contacts/contacts';
import Education from './components/Education/education';
import Landing from './components/landing-page/landing-page';
import Skillspage from './components/skills-page/skills';


function App() {
  return (
    <div className="App">
      <div>
   
        <Landing/>
        <Skillspage/>
        <Education/>
        <ContactForm/>
      </div>
    </div>
  );
}

export default App;
