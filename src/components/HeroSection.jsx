import React, { useState } from 'react'

export default function HeroSection() {
    const [anim , setAnim] = useState(false);
    const animStyle = {position:'absolute', width:'142px', height:"auto", display:'flex', justifyContent:'center', transition:'ease-in-out 400ms',animationDirection: 'normal'};
  return (
    <div>
      <section className='heroSection'>
        <div style={{backgroundImage:`url('/Apresentação Modelo - Layer 21.png')`, backgroundSize:'cover', maxHeight:'fit-content'}}>
            <div className='top-section'>
                <div className='hero-left'>
                    <div className='hero-image'>
                        <img src="/gto-hero-4-img-1 1.png" alt="" />
                    </div>
                    <div className='p-0 clients' >
                        <img src="/Frame 22.png" alt="" />
                    </div>
                </div>
                <div className='d-flex align-items-center'>
                    <div className='hero-right'>
                        <p className='gredientText m-0'>
                            <i className='bi bi-arrow-right'></i> WELCOME TO JYTHU
                        </p>
                        <h1 className='m-0' style={{fontSize:"3.5rem", fontWeight:'bold'}}>A Marketing <span className='gredientText'><a href='#'>Agency</a></span> To Grow Your Business</h1>
                        <p className='m-0'>We are 100+ professional software engineers with more than 10 year of experience in delivering superior products Believe it because you have seen it. Here are real numbers</p>
                        <div className='d-flex flex-wrap mt-4 justify-content-between'>
                            <div onMouseOver={()=>{setAnim(true)}} onMouseLeave={()=>{setAnim(false)}} className='d-flex align-items-center'>
                                <button className='gredientText p-2' style={{ borderRadius:"50px",border:'3px solid #11998E'}}>GET STARTED</button>
                                {/* <img src="/Frame 16.png" alt="" style={{ position:'absolute', width:'100px', height:"40px"}} /> */}
                                <div className='rounded-5 gredientArrow' style={anim?animStyle:null}>
                                    <div style={{transform:anim?null:'rotate(-45deg)'}}><i className='bi bi-arrow-right mx-1' ></i></div>
                                </div>
                            </div>
                            <div>
                                <button className='gredientText' style={{border:'none'}}>
                                    <img src="/Frame 17.png" alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}
