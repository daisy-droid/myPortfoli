
import './App.css';
import ContactForm from './components/contacts/contacts';
import Landing from './components/landing-page/landing-page';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <div>
      <Navbar/>
        <Landing/>
        <ContactForm/>
      </div>
    </div>
  );
}

export default App;
