import react from 'react'
import './Menu.css'


function Menu(){
return(
<div>

<div className="m-wrapper">
    <div className="m-left"> 
     <div className="m-name">
        Azrin 

     </div>
     <span>toggle</span>
    </div>
    <div className="m-right">
      <div className='m-list'>
    <ul style={{fontSize:'25px',listStyleType:'none'}}>
  <li>Home</li>
  <li>Services</li>
  <li>Experiences</li>
  <li>Testimonial</li>
  
</ul>
    <button className='button m-button'>Contact</button>
    </div>
 </div>
</div>
</div>
);
}
export default Menu;