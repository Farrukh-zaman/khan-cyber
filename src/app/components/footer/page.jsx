import React from 'react'

const Footer = () => {
  return (
    <>
<footer class="page-footer font-small blue pt-4">

  <div class="container-fluid text-center text-md-left">

    <div class="row">

      <div class="col-md-6 mt-md-0 mt-3">

        <h5 class="text-info">KHAN <span className="text-secondary">cyber</span> EMPIRE</h5>
        <p className='my-4'>@KHANcyberEMPIRE.co</p>
      </div>

      <hr class="clearfix w-100 d-md-none pb-3" />

      <div class="col-md-3 mb-md-0 mb-3">

        <h5 class="text-uppercase fw-bold">SOCIAL</h5>

        <ul class="list-unstyled">
          <li>
            <a href="#!"> <i className='bi bi-facebook'></i> </a>
          </li>
          <li>
            <a href="#!"> <i className='bi bi-instagram'></i> </a>
          </li>
          <li>
            <a href="#!"> <i className='bi bi-twitter'></i> </a>
          </li>
          <li>
            <a href="#!"> <i className='bi bi-linkedin'></i> </a>
          </li>
        </ul>

      </div>

      <div class="col-md-3 mb-md-0 mb-3">

        <h5 class="text-uppercase fw-bold">LEGAL</h5>

        <ul class="list-unstyled mt-4">
          <li className='my-3 fw-bold'>
            <a href="#!">Terms Of Service</a>
          </li>
          <li className='my-3 fw-bold'>
            <a href="#!">Privacy Policy</a>
          </li>
          <li className='my-3 fw-bold'>
            <a href="#!">How it Works</a>
          </li>
          <li className='my-3 fw-bold'>
            <a href="#!">Payment Terms</a>
          </li>
        </ul>

      </div>
    

    </div>
  </div>
    
  <div class="footer-copyright text-center py-3">© 2023 Copyright:
    <a href="/"> khancyber.com</a>
  </div>
  

</footer>
    
    
    
    
    
    </>
  )
}

export default Footer