import React, { useState } from 'react'
import { NavigationBar } from './components/navbar'
import history from './assets/history-rabbit.png'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


export default function App() {
  return (
    <>
      <NavigationBar/>

      {/* History Page */}
      <div className='' style={{backgroundColor: '#d9d9d9'}}>
        <section id='history'>
          <div className="" style={{width: '100%', maxWidth: '1200px', margin: '0 auto', height: '100%'}}>
            <div className="row" style={{padding: "80px 0"}}>
              <div className="col-md-6">
                <h1>Bunny</h1>
                <p style={{fontSize: 25}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, iusto asperiores explicabo, ipsa delectus soluta.</p>
              </div>
              <div className="col-md-6 text-end">
                <img src={history} alt="Bunny Hunter" style={{width: '90%'}}/>
              </div>
            </div>
          </div>
          {/* <div className="" style={{width: '100%', maxWidth: '1200px', margin: '0 auto', height: '100%'}}>
            <div className="col d-flex" style={{ padding: '40px 0', gap: 20}}>
              <div>
                <h3>Bunny Hunter</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, iusto asperiores explicabo, ipsa delectus soluta.</p>
              </div>
              <div>
                <img src={history} alt="Bunny Hunter"/>
              </div>
            </div>
          </div> */}
        </section>
      </div>

      {/* Type Page */}
      <section id='type'>
        <div className='' style={{ width: '100%'}} >
          <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
              <h1 className='d-flex justify-content-center pb-3 fw-bold' >Type</h1>
              <div class="carousel-item active">
                <div className="cards-wrapper d-flex justify-content-center gap-5">
                  <div class="card" style={{width: '20rem'}}>
                    <img src='src/assets/anggora.jpg' class="card-img-top" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title">Angora Rabbit (Ornamental)</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                  <div class="card" style={{width: '20rem'}}>
                    <img src='src/assets/lop.jpg' class="card-img-top" alt="..." style={{ height: '12%'}} />
                    <div class="card-body">
                      <h5 class="card-title">Lop Rabbit (Ornamental)</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                  <div class="card" style={{width: '20rem'}}>
                    <img src='src/assets/donat.png' class="card-img-top" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title">Flemish Giant Rabbit (Meat/Ornamental)</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="cards-wrapper d-flex justify-content-center  gap-5">
                  <div class="card" style={{width: '20rem'}}>
                    <img src='src/assets/donat.png' class="card-img-top" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title">Rex Rabbit (Ornamental/Meat)</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                  <div class="card" style={{width: '20rem'}}>
                    <img src='src/assets/donat.png' class="card-img-top" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title">Netherland Dwarf Rabbit (Ornamental)</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                  <div class="card" style={{width: '20rem'}}>
                    <img src='src/assets/donat.png' class="card-img-top" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title">Himalayan Rabbit (Ornamental/Meat)</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="cards-wrapper d-flex justify-content-center  gap-5">
                  <div class="card" style={{width: '20rem'}}>
                    <img src='src/assets/donat.png' class="card-img-top" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title">Satin Rabbit (Decorative)</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                  <div class="card" style={{width: '20rem'}}>
                    <img src='src/assets/donat.png' class="card-img-top" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title">Havana Rabbit (Ornamental)</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                  <div class="card" style={{width: '20rem'}}>
                    <img src='src/assets/donat.png' class="card-img-top" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title">Hotot Rabbit (Ornamental)</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev " type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span class="carousel-control-prev-icon " aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      {/* Habitat Page */}
      <section id='habitat'>
        <h5>asdasd</h5>
      </section>

      {/* Foods Page */}
      <section id='foods'>
        <h5>asdasd</h5>
      </section>
    </>
  )
}


