import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.css'
import HomeImage from '../../Assets/Home.png'
import Organic from  '../../Assets/Organic.png'
function Home() {
  return (
    <>
        
       
        <div className='main'>
        <Navbar/>
        <div className="container" style={{marginTop:'30px'}}>
        <div className="row">
            <div className="col-2">
                <img src={Organic} className='organic-image' alt="" />
            </div>
            <div className="col-5">

           <div className="main-text-container">
            
           </div>
            <p
            class="poppins-bold main-welcome-text"
            
          >
            Live on <br/> <span>fruits & vegetables</span> <br/>to live Healthy
             </p>

             <p
            class="poppins-bold main-welcome-quote" 
            
          >
          100% Healthy & Fresh
             </p>
                <br />
        <button className='main-button'> Shop Now </button>
           
            </div>
            <div className="col-5">
    <img src={HomeImage} alt="home"  />
</div>

        </div>
        </div>
    </div></>
  )
}

export default Home