import React, { useState } from 'react'

export default function Section4() {
    const services = [
        {
            id:1,
            h1:'Strategy & Planning',
            logo:'/s4-il-1 1.png',
            p:'Lorem ipsum dolor sit amet bibendum elit sit finibus. Maximus sodales parturien lore arcu eros vel erat pede netus qu.',
            arrow :'/Group 19.png'
        },
        {
            id:2,
            h1:'Strategy & Planning',
            logo:'/s4-il-2 1.png',
            p:'Lorem ipsum dolor sit amet bibendum elit sit finibus. Maximus sodales parturien lore arcu eros vel erat pede netus qu.',
            arrow :'/Group 19.png'

        },
        {
            id:3,
            h1:'Strategy & Planning',
            logo:'/s4-il-3 1.png',
            p:'Lorem ipsum dolor sit amet bibendum elit sit finibus. Maximus sodales parturien lore arcu eros vel erat pede netus qu.',
            arrow :'/Group 19.png'
        },
        {
            id:4,
            h1:'Strategy & Planning',
            logo:'/s4-il-4 1.png',
            p:'Lorem ipsum dolor sit amet bibendum elit sit finibus. Maximus sodales parturien lore arcu eros vel erat pede netus qu.',
            arrow :'/Group 19.png'
        },
        {
            id:5,
            h1:'Strategy & Planning',
            logo:'/s4-il-5 1.png',
            p:'Lorem ipsum dolor sit amet bibendum elit sit finibus. Maximus sodales parturien lore arcu eros vel erat pede netus qu.',
            arrow :'/Group 19.png'
        },
        {
            id:6,
            h1:'Strategy & Planning',
            logo:'/s4-il-6 1.png',
            p:'Lorem ipsum dolor sit amet bibendum elit sit finibus. Maximus sodales parturien lore arcu eros vel erat pede netus qu.',
            arrow :'/Group 19.png'
        }
    ]
    const team = [
        {
            id:1,
            logo:'/t4-img-1 1.png',
            body:'/Group 33.png'
        },
        {
            id:2,
            logo:'/t4-img-2 1.png',
            body:'/Group 33.png'
        },
        {
            id:3,
            logo:'/t4-img-3 1.png',
            body:'/Group 33.png'
        }
    ]
    const useMousePosition = () => {
        const [
          mousePosition,
          setMousePosition
        ] = React.useState({ x: null, y: null });
        // const x = Math.round((Math.random())*30)
        // const y = Math.round(Math.random()*30)
        React.useEffect(() => {
            // { x: ev.clientX, y: ev.clientY }
            
          const updateMousePosition = ev => {
            const x = Math.round(ev.clientX /30)
            const y = Math.round(ev.clientY /30)
            
            setMousePosition({x:x, y:y});
          };
          
          window.addEventListener('mousemove', updateMousePosition);
      
          return () => {
            window.removeEventListener('mousemove', updateMousePosition);
          };
        }, []);
      
        return mousePosition;
      };
      const mousepusition = useMousePosition();
      console.log(mousepusition)
      const [anim , setAnim] = useState(false);
      const animStyle = {position:'absolute', width:'195px', height:"auto", display:'flex', justifyContent:'center', transition:'ease-in-out 400ms',animationDirection: 'reverse'};
      const animStyle2 = {position:'absolute', width:'163px', height:"auto", display:'flex', justifyContent:'center', transition:'ease-in-out 400ms',animationDirection: 'normal'};
  return (
    <>
    <div className='container mt-5'>
        <div className='text-center mb-5'>
            <p className='gredientText m-0'><i className='bi bi-arrow-right'></i> OUR BEST SERVICES</p>
            <h1>We Provide Best Services</h1>
        </div>
        <div className='services-container'>
            {services.map((elm)=>{
                return(
                    <div className='services text-center' style={{backgroundImage:`url()`, backgroundSize:'cover'}}>
                        <div style={{position:'absolute',transform:'translate(100%,0%)'}}>
                            <img src="/Vector (2).png" alt="" />
                        </div>
                        <div className='p-2' style={{zIndex:'1'}}>
                            <img  src={elm.logo} alt="" />
                            <h1 className='fs-4'>{elm.h1}</h1>
                            <p>{elm.p}</p>
                            <img src={elm.arrow} alt="" />
                        </div>
                        <div style={{position:'absolute',transform:'translate(0%,-80%)'}}>
                            <img src="/Vector (1).png" alt="" />
                        </div>
                    </div>
                )
            })}
        </div>
        <div onMouseOver={()=>{setAnim(true)}} onMouseLeave={()=>{setAnim(false)}} className='d-flex align-items-center  mt-5 justify-content-center'>
            <button className='gredientText p-2' style={{ borderRadius:"50px",border:'3px solid #11998E'}}>VIEW ALL SERVICES</button>
            <div className='rounded-5 gredientArrow' style={anim?animStyle:null}>
                <div style={{transform:anim?null:'rotate(-45deg)', color:'white'}}><i className='bi bi-arrow-right mx-1' ></i></div>
            </div>                        
        </div>
        {/* <div className='d-flex align-items-center mt-5 justify-content-center'>
            <button className='gredientText p-2' style={{ borderRadius:"50px",border:'3px solid #11998E'}}>VIEW ALL SERVICES</button>
            <img src="/Frame 16.png" alt="" />
        </div> */}
    </div>
    <div  className='container mt-5 section4'>
      <div className='grid-container'>
        <div className='fst'>
            <img src="/Rectangle 15.png" alt="" />
        </div>
        <div className='snd text-center mt-2'>
            <img src="/Rectangle 16.png" alt="" style={{ transform:`translate(${mousepusition.x}%, ${mousepusition.y }%)`, transition:'ease-in-out 200ms', zIndex:'-1'}}/>
        </div>
        <div className='trd'>
            <img src="/Rectangle 14.png" alt=""  />
        </div>
      </div>
      <div className='marketing'>
            <div className=' mb-5'>
                <p className='gredientText text-center m-0'><i className='bi bi-arrow-right'></i> WITH SEO OPTIMIZATION</p>
                <h1>Marketing And Creative Solutions Seo</h1>
                <p>We are 100+ professional software engineers with more than 10 year of experience in delivering superior products.</p>
            </div>
            <div className='section4-right'>
                <div className='mb-3'>
                    <div className='d-flex justify-content-between mb-1'>
                        <p className='m-0'>Finance Consulting</p>
                        <p className='m-0 gredientText'>80%</p>
                    </div>
                    <div class="progress gredientText p-1 rounded-5" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{height:'fit-content',border:"2px solid #11998E"}}>
                        <div class="progress-bar rounded-5" style={{width: "80%",background: 'linear-gradient(to right, #11998E, #38EF7D)', height:'6px' }}></div>
                    </div>
                </div>
                <div className='mb-3'>
                    <div className='d-flex justify-content-between mb-1'>
                        <p className='m-0'>Finance Consulting</p>
                        <p className='m-0 gredientText'>80%</p>
                    </div>
                    <div class="progress gredientText p-1 rounded-5" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{height:'fit-content',border:"2px solid #11998E"}}>
                        <div class="progress-bar rounded-5" style={{width: "80%",background: 'linear-gradient(to right, #11998E, #38EF7D)', height:'6px' }}></div>
                    </div>
                </div>
                <div className='mb-3'>
                    <div className='d-flex justify-content-between mb-1'>
                        <p className='m-0'>Finance Consulting</p>
                        <p className='m-0 gredientText'>80%</p>
                    </div>
                    <div class="progress gredientText p-1 rounded-5" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{height:'fit-content',border:"2px solid #11998E"}}>
                        <div class="progress-bar rounded-5" style={{width: "80%",background: 'linear-gradient(to right, #11998E, #38EF7D)', height:'6px' }}></div>
                    </div>
                </div>
                <div className='d-flex justify-content-between'>
                    <div onMouseOver={()=>{setAnim(true)}} onMouseLeave={()=>{setAnim(false)}} className='d-flex align-items-center'>
                        <button className='gredientText p-2' style={{ borderRadius:"50px",border:'3px solid #11998E'}}>VIEW ALL SERVICES</button>
                        <div className='rounded-5 gredientArrow' style={anim?animStyle:null}>
                            <div style={{transform:anim?null:'rotate(-45deg)', color:'white'}}><i className='bi bi-arrow-right mx-1' ></i></div>
                        </div>                        
                    </div>
                    {/* <div className='d-flex align-items-center  justify-content-center'>
                        <button className='gredientText p-2' style={{ borderRadius:"50px",border:'3px solid #11998E'}}>VIEW ALL SERVICES</button>
                        <img src="/Frame 16.png" alt="" />
                    </div> */}
                    <div className='d-flex align-items-center '>
                        <img className='me-2' src='/Frame 49.png' alt="" />
                        <div>
                            <p className='gredientText m-0'> <i className='bi bi-arrow-right'></i> Call Us Anytime</p>
                            <h1 className='m-0 fs-4'>0215 6856 9875</h1>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </div>
    <div className='mt-5 mb-5 banner' >
        <div className='d-flex align-items-center'>
            <h1 className='bannerText'>DIGITAL</h1>
            <img src="/Group 22.png" alt="" />
            <h1 className='bannerText'>JYHTU</h1>
            <img src="/Group 22.png" alt="" />
            <h1 className='bannerText'>CREATIVE</h1>
            <img src="/Group 22.png" alt="" />
            <h1 className='bannerText'>DIGITAL</h1>
            <img src="/Group 22.png" alt="" />
            <h1 className='bannerText'>JYHTU</h1>
            <img src="/Group 22.png" alt="" />
            <h1 className='bannerText'>CREATIVE</h1>            
        </div>
    </div>
    <div className='mt-5 mb-4'>
        <div className=' container-fluid d-flex justify-content-evenly flex-wrap '>
            {team.map((elm)=>{
                return(
                    <div className='mb-3'>
                        <div>
                            <img src={elm.body} alt="" />
                        </div>
                        <div className='d-flex flex-column align-items-center' style={{position:'absolute', transform:'translate(40%,-150%)'}}>
                                <img className='mb-3' src={elm.logo} alt="" />
                                <b style={{color:'white'}}>RACHNA SHETH</b>
                                <p style={{color:'white'}}>FULL STACK DEVELOPER</p>
                        </div>
                    </div>
                )
            })}
        </div>
        <div onMouseOver={()=>{setAnim(true)}} onMouseLeave={()=>{setAnim(false)}} className='d-flex align-items-center mt-5 justify-content-center'>
            <button className='gredientText p-2' style={{ borderRadius:"50px",border:'3px solid #11998E'}}>VIEW ALL TEAM</button>
            <div className='rounded-5 gredientArrow' style={anim?animStyle2:null}>
                <div style={{transform:anim?null:'rotate(-45deg)', color:'white'}}><i className='bi bi-arrow-right mx-1' ></i></div>
            </div>                        
        </div>
        {/* <div className='d-flex align-items-center mt-5 justify-content-center'>
            <button className='gredientText p-2' style={{ borderRadius:"50px",border:'3px solid #11998E'}}>VIEW ALL SERVICES</button>
            <img src="/Frame 16.png" alt="" />
        </div> */}
    </div>
    </>
  )
}
