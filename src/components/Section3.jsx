import React, { useState } from 'react'

export default function Section3() {
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
    const [anim , setAnim] = useState(false);
    const animStyle = {position:'absolute', width:'142px', height:"auto", display:'flex', justifyContent:'center', transition:'ease-in-out 400ms',animationDirection: 'normal'};
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
                <div onMouseOver={()=>{setAnim(true)}} onMouseLeave={()=>{setAnim(false)}} className='d-flex align-items-center'>
                    <button className='gredientText p-2' style={{ borderRadius:"50px",border:'3px solid #11998E'}}>GET STARTED</button>
                                {/* <img src="/Frame 16.png" alt="" style={{ position:'absolute', width:'100px', height:"40px"}} /> */}
                    <div className='rounded-5 gredientArrow' style={anim?animStyle:null}>
                        <div style={{transform:anim?null:'rotate(-45deg)', color:'white'}}><i className='bi bi-arrow-right mx-1' ></i></div>
                    </div>                        
                </div>
                {/* <div className='d-flex align-items-center mt-3'>
                    <button className='gredientText p-2' style={{ borderRadius:"50px",border:'3px solid #11998E'}}>GET STARTED</button>
                    <img src="/Frame 16.png" alt="" />
                </div> */}
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
        <img style={{transform:`tramslate(${mousepusition.x}%,-${mousepusition.y}%)`}} src="/Rectangle 7.png" alt="" />
      </div>
    </div>
    
    </>
  )
}
