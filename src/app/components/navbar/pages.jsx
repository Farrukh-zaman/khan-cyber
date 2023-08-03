import React from 'react'

const Navbar = () => {
  return (
    <>
      {/* BOOTSTRAP */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary p-3">
  <div className="container-fluid">
    <a className="navbar-brand text-info fs-4 fw-bold" href="#"> KHAN <span className='text-secondary'>cyber</span> Empire </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Explore Jobs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Explore Request</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-disabled="true">Explore Users</a>
        </li>
      </ul>
      
      <form className="d-flex" role="search">
        <button className="btn  mx-3" type="submit">Login</button>
        <button className="btn btn-outline-success" type="submit">Register</button>
      </form>
    </div>
  </div>
</nav>  
    </>
  )
}

export default Navbar