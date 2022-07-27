import react from 'react'
import './App.css';
import Menu from './components/header/Menu'
import Hero  from './components/hero/Hero';
import Services from './components/services/Services';




function App() {

  return (
    <div className="App">
      
      <Menu></Menu>
      <Hero></Hero>
      <Services></Services>
    </div>
  );
}

export default App;
