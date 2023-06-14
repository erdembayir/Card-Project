import 'bulma/css/bulma.css';
import './App.css';
import Course from './Course';
import Angular from './images/angular.jpg';
import Bootstrap5 from './images/bootstrap5.png';
import FrontEnd from './images/kompleweb.jpg';
import BackEnd from './images/ccsharp.png';

function App() {
  return (
    <div className="App">
      <section class="hero is-link">
  <div class="hero-body">
    <p class="title">
      Kurslarım
    </p>
    <p class="subtitle">    
    </p>
  </div>
</section>
      <div className = 'container'>
         <section className='section'>
         <div className = 'columns'>
        <div className = 'column'>
       
        <Course 
     title="Angular" 
     description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, ex odit repudiandae fugit vitae deleniti minus similique neque mollitia quae esse repellendus architecto nobis." sallama ={Angular}/>
        
        </div>  
        <div className = 'column'>       
        <Course 
     title="Bootstratp" 
     description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, ex odit repudiandae fugit vitae deleniti minus similique neque mollitia quae esse repellendus architecto nobis." sallama={Bootstrap5}/>
        </div>  
        <div className = 'column'>
        
        <Course 
     title="FrontEnd" 
     description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, ex odit repudiandae fugit vitae deleniti minus similique neque mollitia quae esse repellendus architecto nobis." sallama={FrontEnd}/>
        </div>  
        <div className = 'column'>
        <Course 
     title="BackEnd" 
     description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, ex odit repudiandae fugit vitae deleniti minus similique neque mollitia quae esse repellendus architecto nobis." sallama={BackEnd}/>
        </div>
        </div>
         </section>
          
        </div> 
       </div>  
          
  );
}

export default App;
