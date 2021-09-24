import React from 'react'
import "./Header.css"
import Divider from './divider';
import Load from './load';

function Header() {
    return (
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        {/* logo */}
        <div className="divleft">
            <a class="navbar-brand Hlogo" href="#">1$fortheworld</a>
            <p>if not you, who else?</p>
        </div>
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
       
       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item divider">
          <Divider/>
        </li>
        <li class="load">
            <Load/>
        </li>
      </ul>
      {/* buttons */}
        <div class="d-flex">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Why giving?</a>
                </li>
                <li>
                    <button type="button" class="btn btn-outline-warning">Save the World</button>
                </li>
            </ul>
        </div>
      </div>
    </div>
  </nav>
       
    )
}

export default Header
