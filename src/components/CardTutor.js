import React from 'react';
import './App.css';

import img from '../logo512.png';

function CardTutor() {
  return (
    <div className=" m-md-2  myshadow row" style={{ width: '29rem' }}>
      <img src={img} className="align-self-left col img-tutor" alt="..." />
      <div className="align-self-right col m-md-3 mt-md-5">
        <h5 className="card-title">Tên Gia sư</h5>
        <p className="card-text">Giới thiệu sơ lược về gia sư</p>
        <div className="row">
        <span className="badge badge-info ml-md-1">Tag kĩ năng</span>
        <span className="badge badge-danger ml-md-1">Lớp</span>
        </div>
        <div className="row">
          <a href="/" className="btn mybg my-2 m-sm-2">
            Xem chi tiết
          </a>
          <a href="/" className="btn btn-success my-2 m-sm-2">
            Thuê
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardTutor;
