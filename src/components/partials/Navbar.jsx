import React from 'react'

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid d-flex justify-content-between">
                <a className="navbar-brand" href="#">
                    <img src="/public/PNG 3.png" alt="logo" />
                </a>
                <div  className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header ">
                    <i style={{transform:'translate(450%,-50%)'}} type="button" className="bi bi-x fs-4"  data-bs-dismiss="offcanvas" aria-label="Close"></i>
                        <a className="navbar-brand" href="#">
                            <img src="/public/PNG 3.png" alt="logo" />
                        </a>
                        
                    </div>
                    <div className="offcanvas-body">
                        <div className="">
                            <nav className="main-navigation clearfix ul-li w-fit">
                                <ul id="navbar-nav" className="nav navbar-nav clearfix">
                                    <li id="menu-item-4740" className="nav-item">
                                        <div className='offcnavasSearch'>
                                            <input type="text" name="" id="" placeholder='Search here' />
                                            <i className='bi bi-search'></i>
                                        </div>
                                    </li>
                                    <li id="menu-item-4741" className="nav-item"><a className='nav-link' href="#home">Home</a></li>
                                    <li id="menu-item-4742" className="nav-item"><a className='nav-link' href="#about">About</a></li>
                                    <li id="menu-item-4743" className="nav-item"><a className='nav-link' href="#service">Service</a></li>
                                    <li id="menu-item-4744" className="nav-item"><a className='nav-link' href="#project">Paages</a></li>
                                    <li id="menu-item-4 746" className="nav-item"><a className='nav-link' href="#blog">News & Event</a></li>
                                    <li id="menu-item-4745" className="nav-item"><a className='nav-link' href="#contact">Contact</a></li>
                                </ul>            
                            </nav>
                        </div>
                    </div>
                </div>
                <div className='nav-right'>
                    <div className='bucket'><img src="/Group 9.png" alt="" width='24px' height='24px' /></div>
                    <div className='sBtn' data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop"><img src="/Vector.png" alt="" width='24px' height='24px'/></div>
                    <div>
                        <button className='getQuote'>
                        <p className='m-0 me-1' style={{zIndex:'1'}}>GET QUOTE</p> 
                        <div className='arrow'><i className='bi bi-arrow-right'></i></div></button>
                    </div>
                    <button className="menu" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <i className='bi bi-list me-1'></i>
                        Menu
                    </button>
                </div>
            </div>
        </nav>
        <div style={{maxWidth:"100%", height:'100%'}} className="offcanvas offcanvas-top " tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
            <div className='container d-flex flex-column align-items-center'>
                <div className="offcanvas-header" style={{width:'100%'}}>
                    <h4 className="offcanvas-title" id="offcanvasTopLabel">Find What You Need</h4>
                </div>
                <div className="offcanvas-body" style={{width:'100%'}}>
                    <div className='search'>
                        <input placeholder='Search here' type="text" name="" id="" />
                        <button>
                            <i className='bi bi-search '></i>
                        </button>
                    </div>
                    <i type="button" className="bi bi-x fs-4" data-bs-dismiss="offcanvas" aria-label="Close"></i>
                </div>
            </div>
        </div>
    </div>
  )
}
