import React from 'react'

export default function Section3() {
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
  return (
    <>
    <div className='container section3' style={{marginTop:'95px'}}>
      <div className='my-auto'>
        <p className='gredientText'><i className='bi bi-arrow-right'></i> ABOUT US</p>
        <h1>We Want To Give You The Best Service</h1>
        <p style={{color:'#4F7396'}}>We are 100+ professional software engineers with more than 10 year of experience in delivering superior products Believe it because you have seen it. Here are real numbers</p>
        <div className='d-flex justify-content-between'>
            <div>
                <h3 className='d-flex flex-column' style={{width:'min-content'}}>
                    <span className='gredientText fs-1'>24</span> 
                    <span style={{color:'#4F7396'}}>Year Experience</span>
                </h3>
                <div className='d-flex align-items-center mt-3'>
                    <button className='gredientText p-2' style={{ borderRadius:"50px",border:'3px solid #11998E'}}>GET STARTED</button>
                    <img src="/Frame 16.png" alt="" />
                </div>
            </div>
            <div className='me-3'>
                <ul className='navbar-nav'>
                    <li className="nav-item"><img src="/Group 13.png" alt="" /> Product Engineering</li>
                    <li className="nav-item"><img src="/Group 13.png" alt="" /> Digital Service</li>
                    <li className="nav-item"><img src="/Group 13.png" alt="" /> IT Consultancy</li>
                    <li className="nav-item"><img src="/Group 13.png" alt="" /> Digital Service</li>
                </ul>
            </div>
        </div>
      </div>
      <div className='section3-img' style={{backgroundImage:`url('/Group 17 (1).png')` , backgroundSize:'100% 100%'}}>
        <img src="/Rectangle 7.png" alt="" />
      </div>
    </div>
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
        <div className='d-flex align-items-center mt-5 justify-content-center'>
            <button className='gredientText p-2' style={{ borderRadius:"50px",border:'3px solid #11998E'}}>VIEW ALL SERVICES</button>
            <img src="/Frame 16.png" alt="" />
        </div>
    </div>
    </>
  )
}
