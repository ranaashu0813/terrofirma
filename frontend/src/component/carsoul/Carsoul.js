import React from 'react'
import './Carsoul.css'
const Carasoul = () => {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide w-100" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner" style={{height: "31rem"}}>
    <div className="carousel-item active">
    <img src="/image1.jpg" className="d-block w-[100vw] carasol_image" alt="..." style={{ height: "31rem"}}/>
      <div className="carousel-caption d-md-block">
        <h5 className=' md:text-2xl '>Discover Your Design Destiny</h5>
        <p >Where Creativity Meets Structure</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="/image2.jpg" className="d-block w-[100vw] carasol_image" alt="..." style={{ height: "31rem"}}/>
      <div className="carousel-caption  d-md-block">
        <h5 className=' text-2xl'>Unveiling Architectural Wonders</h5>
        <p >Explore, Envision, Elevate.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="/image3.jpg" className="d-block w-[100vw] carasol_image" alt="..." style={{ height: "31rem"}}/>
      <div className="carousel-caption  d-md-block">
        <h5 className=' md:text-2xl'>Crafting Dreams into Concrete Realities</h5>
        <p >Your Journey Starts Here.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

<div className='info' style={{ width: "100vw", maxWidth:"100%"}}>
   

</div>
    <div className="text-wrap" style={{height:"maxContent", width:"100%" , backgroundColor: "azure" ,padding: "44px" , textAlign:"center",height:"20vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
    <div>
        <h2 style={{fontWeight:"bold",marginTop:"5rem"}}>Terrafirma Grc And Concrete Company </h2>
      
        <p>Concrete Products</p>

    </div>

    </div>
    </>
  )
}

export default Carasoul