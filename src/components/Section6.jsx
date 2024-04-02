import React, { useState } from 'react'

export default function Section6() {
    const [left, setLeft] = useState(0);
    const [hoverUp, setHoverUp] = useState(false)
    const incr =()=>{
        if(left<=100 && left>=90){
            setLeft(100)
        }else{setLeft(left+10)}
        
    }
    const decr =()=>{
        if(left != 0 && left < 10){
            setLeft(0);
        }else{
            setLeft(left-10);
        }
    }
    const profile = [
        {
            id:1,
            img:'/gto-t5-img-1 1.png',
            star:"/Star.png"
        },
        {
            id:2,
            img:'/gto-t5-img-2 1.png',
            star:"/Star.png"
        },
        {
            id:3,
            img:'/gto-t5-img-3 1.png',
            star:"/Star.png"
        }
    ]
    const blogs = [
        {
            id:1,
            img:'/Rectangle 30.png',
            star:"/Star.png"
        },
        {
            id:2,
            img:'/Rectangle 30 (1).png',
            star:"/Star.png"
        },
        {
            id:3,
            img:'/Rectangle 30 (2).png',
            star:"/Star.png"
        },
        {
            id:3,
            img:'/Rectangle 30 (3).png',
            star:"/Star.png"
        }
    ]
  return (
    <>
    <div className='mt-5'>
        <div className='text-center'>
            <p className='gredientText m-0'><i className='bi bi-arrow-right'></i> OUR TESTIMONIAL</p>
            <h1>What Our Clients Say About Us</h1>
        </div>
        <div className='mt-5 profileBanner'>
            <div className='profile-cnt container-fluid' style={{position:'relative',right:`${left}%`}}>
                {profile.map((elm)=>{
                    return(
                    <div className='profile-box'>
                        <div className=' d-flex align-items-center ' style={{borderBottom:'1px solid grey'}}>
                            <div>
                                <img src={elm.img} alt="" />
                            </div>
                            <div className='my-2 '>
                                <div>
                                    <img className='mx-1' src={elm.star} alt="" />
                                    <img className='mx-1' src={elm.star} alt="" />
                                    <img className='mx-1' src={elm.star} alt="" />
                                    <img className='mx-1' src={elm.star} alt="" />
                                    <img className='mx-1' src={elm.star} alt="" />
                                </div>
                                <p>“With Over A Decade Of Experie, We’ve Established Ourselves As One Of The Pioneering Agencies In The Region. Our Small, Flexible, Agile And Design-Led Structures & Processes”</p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center p-2'>
                            <p className='m-0'>ESTHER HOWARD</p>
                            <p className='m-0 gredientText'>FINANCE SPECIALIST</p>
                        </div>
                    </div>
                    )
                })}
                {profile.map((elm)=>{
                    return(
                    <div className='profile-box'>
                        <div className=' d-flex align-items-center' style={{borderBottom:'1px solid grey'}}>
                            <div>
                                <img src={elm.img} alt="" />
                            </div>
                            <div className='my-2 '>
                                <div>
                                    <img className='mx-1' src={elm.star} alt="" />
                                    <img className='mx-1' src={elm.star} alt="" />
                                    <img className='mx-1' src={elm.star} alt="" />
                                    <img className='mx-1' src={elm.star} alt="" />
                                    <img className='mx-1' src={elm.star} alt="" />
                                </div>
                                <p>“With Over A Decade Of Experie, We’ve Established Ourselves As One Of The Pioneering Agencies In The Region. Our Small, Flexible, Agile And Design-Led Structures & Processes”</p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center p-2'>
                            <p className='m-0'>ESTHER HOWARD</p>
                            <p className='m-0 gredientText'>FINANCE SPECIALIST</p>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
        <div className='d-flex align-items-center justify-content-between container mt-5'>
            <div class="progress gredientText rounded-5" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{height:'fit-content',border:"2px solid #11998E", width:"80%"}}>
                <div class="progress-bar rounded-5" style={{width: `${left}%`,background: 'linear-gradient(to right, #11998E, #38EF7D)', height:'3px' }}></div>
            </div>
            <div className='d-flex  align-items-center' style={{position:'relative'}}>
                <button onClick={incr} className='gredientText rounded-5 px-2 mx-2' style={{border:'5px solid #38EF7D'}}><b><i className='bi bi-arrow-left fs-4'></i></b></button>
                <button onClick={decr} className='gredientText rounded-5 px-2 mx-2' style={{border:'5px solid #38EF7D'}}><b><i className='bi bi-arrow-right fs-4'></i></b> </button>
            </div>
        </div>
    </div>
    <div className='blogs container-fluid'>
        <div className='blog-text'>
            <div className='text-center'>
                <p className='gredientText m-0'><i className='bi bi-arrow-right'></i> OUR BLOGS & NEWS</p>
                <h1 style={{fontSize:"3.5rem", fontWeight:'bold'}}>Get More Update For News</h1>
            </div>
            <p style={{color:'#4F7396'}}>We are 100+ professional software engineers with more than 10 years of experience in delivering super products it because you've seen it.</p>
            <div className='d-flex align-items-center mt-5'>
                <button className='gredientText p-2' style={{ borderRadius:"50px",border:'3px solid #11998E'}}>VIEW ALL PROJECT</button>
                <img src="/Frame 16.png" alt="" />
            </div>
        </div>
        <div className=''>
            {blogs.map((elm)=>{
                return(
                    <div className='blog-box'>
                        <div onMouseOver={()=>setHoverUp(true)} onMouseLeave={()=>setHoverUp(false)}>
                            <img src={elm.img} alt="" />
                            <div className='hoverUp' style={{display: hoverUp?'flex':'none'}}>
                                <i className='bi bi-arrow-right fs-1'></i>
                            </div>
                        </div>
                        <div className='blog-box-text' style={{border:"2px solid lightgrey", borderRadius:'15px'}}>
                            <div className='d-flex align-items-center '>
                                <div className='rounded-3 p-1' style={{width:'fit-content', background:"#CCEFD9"}}>
                                    <p className='gredientText m-0'>Business</p>
                                </div>
                                <p className='m-0'>2 April, 2024</p>
                            </div>
                            <div>
                                <h1 className='fs-4'>Agency Needs To Embrace SocialMedia..</h1>
                                <p>Lorem ipsum dolor sit amet consectetur. Sed risus lectus ac semper id proin mi nulla</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
    </>
  )
}
