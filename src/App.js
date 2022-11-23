
import './App.css';
import ContactForm from './components/contacts/contacts';
import Landing from './components/landing-page/landing-page';
import Skillspage from './components/skills-page/skills';


function App() {
  return (
    <div className="App">
      <div>
   
        <Landing/>
        <Skillspage/>
        <ContactForm/>
      </div>
    </div>
  );
}

export default App;
