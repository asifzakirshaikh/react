import React from 'react'
const Navbar = () => {
  return (
    <>
    <div className='container py-3'>
        <div className='row'>
            <div className='col-lg-10'>
                <img className='img-fluid' width={220} src='images/logo/logo.png'></img>
            </div>
            <div className='col-lg-2 mt-3'>
            <a href="https://www.linkedin.com/company/alltake-ites-pvt-ltd/" target="_blank" className=""><i className="fa-brands fa-linkedin-in fa-1x linkd me-3"></i></a>
                <a href="https://www.facebook.com/people/Alltake-B2B/100063904035803/" target="_blank" className=""><i className="fa-brands fa-facebook-f fa-1x me-3 face"></i></a>
                <a href="" target="_blank" className=""><i className="fa-brands fa-twitter fa-1x me-3 twit"></i></a>  
            </div>
        </div>
    </div>
   <div className='container-fluid px-0'>
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary py-3">
  <div className="container">
    <a className="navbar-brand" href="#"></a>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link me-3 my-auto" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link me-3 my-auto" href="News">News</a>
        </li>
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle me-3 my-auto" href="MartechRadar" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Martech Radar
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <div className="row">
              <div className="col-lg-6">
              <li><a className="dropdown-item" href="MartechRadar">MartechRadar</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
              </div>
              <div className="col-lg-6">
              <li><a className="dropdown-item" href="MartechRadar">MartechRadar</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
              </div>
            </div>
            
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle me-3 my-auto" href="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Advertising
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            
            <li><a className="dropdown-item" href="Advertising">Advertising</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle me-3 my-auto" href="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Interviews
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="Interview">Interview</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link me-3 my-auto" href="Contact" >Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link me-3 my-auto" href="Blogs" >Blogs</a>
        </li>
      </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <a className="nav-link me-3 my-auto" data-bs-toggle="modal" data-bs-target="#exampleModal" aria-current="page" href="#"><i className="fa-solid fa-user-large"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link me-3 my-auto" data-bs-toggle="modal" data-bs-target="#exampleModal1" aria-current="page"   href=""><i class="fa-solid fa-magnifying-glass"></i></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
   </div>

   <div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
	<div className="modal-content">
	  <div className="modal-body">
			  
    <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
	  </div>
	</div>
  </div>
</div>
   </>
  )
}

export default Navbar