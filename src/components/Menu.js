import React from 'react';


function Menu() {
  return (
   
    <nav className="navbar navbar-expand-sm navbar-dark mybg m-md-2 myshadow ">
      <a className="navbar-brand" href="/">UBER FOR TUTOR</a>
      <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
          aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"/>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="/">Trang Chủ <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Link</a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
        
          <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
          <button className="btn btn-outline-light my-2 mr-sm-2" type="submit">Tìm Gia Sư</button>
          <button className="btn btn-outline-light my-2 mr-sm-2" type="submit">Tìm Công Việc</button>
        </form>
      </div>
    </nav>
    
    
  );
}

export default Menu;
