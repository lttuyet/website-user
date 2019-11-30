import React from 'react';
import './App.css';

import img from '../logo512.png';

function CardTutor() {
  return (
    <div
      className="card m-md-4 ml-md-4 myshadow"
      style={{ width: '18rem' }}
    >
      <img
        src={img}
        style={{ width: '10rem' }}
        className="card-img-top align-self-center"
        alt="..."
      />
      <div className="card-body align-self-center">
        <h5 className="card-title">Tên Gia sư</h5>
        <p className="card-text">Giới thiệu sơ lược về gia sư</p>
        <a href="/" className="btn mybg my-2 m-sm-2">
          Xem chi tiết
        </a>
        <a href="/" className="btn btn-success my-2 m-sm-2">
          Thuê
        </a>
      </div>
    </div>
  );
}

export default CardTutor;
