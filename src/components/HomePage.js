import React from 'react';
import Menu from './Menu';
import CardTutor from './CardTutor';

import './App.css';

function HomePage() {
  
  return (
    <div className="bg-light">
      <Menu />
      <div className="row ">
      <div className="col-md-3 ">
          <div className="row row-cols-1 row-cols-md-2">
            <p className=" col m-md-2 ml-md-4 mytitle separate ">PHÂN LOẠI</p>
          </div>
          <div className = "myscroll">
            <div className="accordion" id="accordionExample">
              <div className="card mr-md-2 ml-md-2">
                <div className="card-header" id="headingOne">
                  <h2 className="mb-0">
                    <button
                      className="btn"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Môn học
                    </button>
                  </h2>
                </div>

                <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div className="list-group">
                    <a href="/" className="list-group-item list-group-item-action">
                      Ngữ Văn
                    </a>
                    <a href="/" className="list-group-item list-group-item-action">
                      Toán Học
                    </a>
                    <a href="/" className="list-group-item list-group-item-action">
                      Vật Lý
                    </a>
                    <a href="/" className="list-group-item list-group-item-action">
                      Sinh Học
                    </a>
                    <a href="/" className="list-group-item list-group-item-action">
                      Hóa Học
                    </a>
                    <a href="/" className="list-group-item list-group-item-action">
                      Lịch Sử
                    </a>
                    <a href="/" className="list-group-item list-group-item-action">
                      Địa Lý
                    </a>

                    
                  </div>
                </div>
              </div>
              <div className="card mr-md-2 ml-md-2 ">
                <div className="card-header" id="headingTwo">
                  <h2 className="mb-0">
                    <button
                      className="btn collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Khối
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionExample"
                >
                   <div className="list-group">
                    <a href="/" className="list-group-item list-group-item-action">
                      Lớp 1
                    </a>
                    <a href="/" className="list-group-item list-group-item-action">
                      Lớp 2
                    </a>
                    <a href="/" className="list-group-item list-group-item-action">
                      Lớp 3
                    </a>
                    <a href="/" className="list-group-item list-group-item-action">
                      Lớp 4
                    </a>
                    <a href="/" className="list-group-item list-group-item-action">
                      Lớp 5
                    </a>
                    <a href="/" className="list-group-item list-group-item-action">
                      Lớp 6
                    </a>
                    <a href="/" className="list-group-item list-group-item-action">
                      Lớp 7
                    </a>
                    <a href="/" className="list-group-item list-group-item-action">
                      Lớp 8
                    </a>
                    <a href="/" className="list-group-item list-group-item-action">
                      Lớp 9
                    </a>
                    <a href="/" className="list-group-item list-group-item-action">
                      Lớp 10
                    </a>
                    <a href="/" className="list-group-item list-group-item-action">
                      Lớp 11
                    </a>
                    <a href="/" className="list-group-item list-group-item-action">
                      Lớp 12
                    </a>

                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-9 ">
          <div className="row row-cols-1 row-cols-md-1">
            <p className=" col m-md-2 mr-md-4 mytitle separate">
              DANH SÁCH GIA SƯ
            </p>
          </div>
          <div className="row row-cols-1 row-cols-md-1 myscroll">
            <div className="col mb-3">
              <CardTutor />
            </div>
            <div className="col mb-3">
              <CardTutor />
            </div>
            <div className="col mb-3">
              <CardTutor />
            </div>
            <div className="col mb-3">
              <CardTutor />
            </div>
            <div className="col mb-3">
              <CardTutor />
            </div>
            <div className="col mb-3">
              <CardTutor />
            </div>
            <div className="col mb-3">
              <CardTutor />
            </div>
            <div className="col mb-3">
              <CardTutor />
            </div>
            <div className="col mb-3">
              <CardTutor />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default HomePage;
