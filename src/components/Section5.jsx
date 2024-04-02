import React, { useState } from 'react'

export default function Section5() {
    const [left, setLeft] = useState(0);
    const incr =()=>{
        if(left<=100 && left>=80){
            setLeft(100)
        }else{setLeft(left+20)}
        
    }
    const decr =()=>{
        if(left != 0 && left < 20){
            setLeft(0);
        }else{
            setLeft(left-20);
        }
    }
  return (
    <>
    <div className='section5'>
      <div className='d-flex container-fluid'>
        <div>
            <p className='gredientText'><i className='bi bi-arrow-right'></i> OUR BEST PROJECTS</p>
            <h1>Take A Look Our Work Gallery Recent Projects</h1>
        </div>
        <div>
            <p style={{color:'#4F7396'}}>We Are 100+ Professional Software Engineers With More Than 10 Years Of Experience In Delivering Superior</p>
            <div className='d-flex align-items-center mt-5'>
                <button className='gredientText p-2' style={{ borderRadius:"50px",border:'3px solid #11998E'}}>VIEW ALL PROJECT</button>
                <img src="/Frame 16.png" alt="" />
            </div>
        </div>
      </div>
      <div style={{overflow:'hidden'}}>
        <img src="/Ellipse 14.png" alt="" style={{width:'100%',position:'relative', transform:'translate(0,46%)', zIndex:'1'}} />
        <div className='d-flex justify-content-between' style={{position:'relative', right:`${left}%`, transition:'ease-in 500ms'}}>
            <img src="/Rectangle 24.png" alt=""  className='fstImage me-5'/>
            <img src="/Rectangle 25.png" alt="" className=' me-5' />
            <img src="/Rectangle 26.png" alt="" className=' me-4' />
            <img src="/Rectangle 24.png" alt=""  className='fstImage me-5'/>
            <img src="/Rectangle 25.png" alt="" className=' me-5' />
            <img src="/Rectangle 26.png" alt="" className=' ' />
            <div className='d-flex flex-column' style={{position:'absolute', left:'40%', transform:"translate(0%, 50%)"}}>
                <img className='arrow-corn' src="/noun-arrow-left-419623 1.png" alt="" />
                <div>
                    <button className='p-1 px-2 rounded-5' style={{color:'white',border:'none',background:'linear-gradient(to right, #11998E , #38EF7D)'}}>
                        marketing
                    </button>
                    <p className='fs-5' style={{color:'white'}}>Social Media Marketing</p>
                </div>
            </div>
        </div>
        <img src="/Ellipse 14.png" alt="" style={{width:'100%', position:"absolute",transform:'translate(0,-46%)'}} />
        <div className='d-flex justify-content-center align-items-center' style={{position:'relative'}}>
            <button onClick={incr} className='gredientText rounded-5 px-2 mx-2' style={{border:'5px solid #38EF7D'}}><b><i className='bi bi-arrow-left fs-2'></i></b></button>
            <button onClick={decr} className='gredientText rounded-5 px-2 mx-2' style={{border:'5px solid #38EF7D'}}><b><i className='bi bi-arrow-right fs-2'></i></b> </button>
        </div>
      </div>
    </div>

    <div className='container-fluid mt-5'>
        <div className='text-center'>
            <p className='gredientText'><i className='bi bi-arrow-right'></i> OUR WORK PROCESS</p>
            <h1>A Simple, Yet Powerful AndEfficient Process</h1>
        </div>
        <div className='d-flex text-center mt-5 container process'>
            <div>
                <img className='mb-3' src="/Frame 68.png" alt="" />
                <h3>1. MARKETING PLANE</h3>
                <p style={{color:'#4F7396'}}>Lorem ipsum dolor sit amet natoque. Primis nam feugiat aptent vestibulum pulvinar torqu ent. </p>
            </div>
            <div>
                <img className='mb-3' src="/Frame 69.png" alt="" />
                <h3>2. EXECUTION</h3>
                <p style={{color:'#4F7396'}}>Lorem ipsum dolor sit amet natoque. Primis nam feugiat aptent vestibulum pulvinar torqu ent. </p>
            </div>
            <div>
                <img className='mb-3' src="/Frame 70.png" alt="" />
                <h3>3. GROWTH & PLANE</h3>
                <p style={{color:'#4F7396'}}>Lorem ipsum dolor sit amet natoque. Primis nam feugiat aptent vestibulum pulvinar torqu ent. </p>
            </div>
        </div>
    </div>

    </>
  )
}
