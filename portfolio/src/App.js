
import './App.css';
import Menu from './components/header/Menu'
import Hero  from './components/hero/Hero';
import Services from './components/services/Services';
import Experience from './components/experience/Experience';
import Technology from './components/technology/Technology';
import Portfolio from './components/portfolio/Portfolio';


function App() {

  return (
    <div className="App">
     
      <Menu></Menu>
      <Hero></Hero>
      <Services></Services>
      <Experience></Experience>
      <Technology></Technology>
      <Portfolio></Portfolio>
   
  
   
    </div>
  );
}

export default App;
