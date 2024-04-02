import React from 'react'

export default function Footer() {
  return (
    <footer style={{background:'#00425A'}}>
      <div className='footerTop'>
        <div className='d-flex align-items-center'>
            <div className='footerImg' style={{position:'absolute',}}>
                <img src="/n4-img-1 1.png" alt="" />
            </div>
            <div className='footerTop-left'>
                <div className=''>
                    <h1>
                        Subscribe To Our Newsletter!
                    </h1>
                    <p>We are 100+ professional software engineers with more than 10 years in delive ring super products it because you've seen it.</p>
                    <div className='footerInput'>
                        <form>
                            <input placeholder='Your Email' type="text" name="" id="" />
                            <button>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className='nav-list'>
        <div className='nav-list1'>
            <img src="/PNG 3.png" alt="" />
            <p style={{color:'white'}}>Improve Efficiency, Provide A Better Customer Experience With Modern Technolo Services Available</p>
            <img src="/gto-footer-2-payment 1.png" alt="" />
        </div>
        <div className='nav-list2'>
            <div>
                <p className='footer-nav-text'>Resources</p>
                <ul className="navbar-nav">
                    <li className="nav-item"><a href="" className='nav-link'>Carrer</a></li>
                    <li className="nav-item"><a href="" className='nav-link'>About us</a></li>
                    <li className="nav-item"><a href="" className='nav-link'>Features</a></li>
                    <li className="nav-item"><a href="" className='nav-link'>Services</a></li>
                </ul>
            </div>
            <div>
                <p className='footer-nav-text'>Resources</p>
                <ul className="navbar-nav">
                    <li className="nav-item"><a href="" className='nav-link'>Carrer</a></li>
                    <li className="nav-item"><a href="" className='nav-link'>About us</a></li>
                    <li className="nav-item"><a href="" className='nav-link'>Features</a></li>
                    <li className="nav-item"><a href="" className='nav-link'>Services</a></li>
                </ul>
            </div>
            <div>
                <p className='footer-nav-text'>Resources</p>
                <ul className="navbar-nav">
                    <li className="nav-item"><a href="" className='nav-link'>Carrer</a></li>
                    <li className="nav-item"><a href="" className='nav-link'>About us</a></li>
                    <li className="nav-item"><a href="" className='nav-link'>Features</a></li>
                    <li className="nav-item"><a href="" className='nav-link'>Services</a></li>
                </ul>
            </div>
        </div>
      </div>
    </footer>
  )
}
