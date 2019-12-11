import React, { PureComponent } from 'react';
import Menu from '../containers/MenuContainer';
import CardTutor from './CardTutor';
import img from '../hcmus.png';
// import { Redirect } from 'react-router-dom';

import './App.css';

class HomePage extends PureComponent {
  render() {
    // const st = this.props;

    return (
      <div className="bg-light">
        <Menu />
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
          
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            />
            <li data-target="#carouselExampleIndicators" data-slide-to="1" />
            <li data-target="#carouselExampleIndicators" data-slide-to="2" />
          </ol>
          <div className="carousel-inner banner">
            <div className="carousel-item active">
              <img src={img} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img} className="d-block w-100" alt="..." />
            </div>
          </div>
          <a
            className="carousel-control-prev ml-md-8"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next mr-md-8"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div className="row ">
          <div className="col-md-3 ">
            <div className="row row-cols-1 row-cols-md-2">
              <p className=" col m-md-2 ml-md-4 mytitle separate ">PHÂN LOẠI</p>
            </div>
            <div className="myscroll">
              <div className="accordion" id="accordionExample">
              <div className="card mr-md-2 ml-md-2">
                  <div className="card-header bg-info" id="heading1">
                    <h2 className="mb-0">
                      <button
                        className="btn btn-info bg-info "
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse1"
                        aria-expanded="true"
                        aria-controls="collapse1"
                      >
                        Khu vực
                      </button>
                    </h2>
                  </div>

                  <div
                    id="collapse1"
                    className="collapse show"
                    aria-labelledby="heading1"
                    data-parent="#accordionExample"
                  >
                    <div className="list-group">
                      <a
                        href="/"
                        className="list-group-item list-group-item-action"
                      >
                        Hồ Chí Minh
                      </a>
                      <a
                        href="/"
                        className="list-group-item list-group-item-action"
                      >
                        Hà Nội
                      </a>
                      
                      
                    </div>
                  </div>
                </div>
                
                <div className="card mr-md-2 ml-md-2">
                  <div className="card-header" id="headingOne">
                    <h2 className="mb-0">
                      <button
                        className="btn btn-info"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Kỹ năng
                      </button>
                    </h2>
                  </div>

                  <div
                    id="collapseOne"
                    className="collapse"
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                  >
                    <div className="list-group">
                      <a
                        href="/"
                        className="list-group-item list-group-item-action"
                      >
                        Kỹ năng gì đó
                      </a>
                      
                    </div>
                  </div>
                </div>
                
                <div className="card mr-md-2 ml-md-2 ">
                  <div className="card-header" id="headingTwo">
                    <h2 className="mb-0">
                      <button
                        className="btn btn-info "
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Giá tiền theo giờ
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
                      <a
                        href="/"
                        className="list-group-item list-group-item-action"
                      >
                        Nhỏ hơn 30.000 VNĐ
                      </a>
                      <a
                        href="/"
                        className="list-group-item list-group-item-action"
                      >
                        Từ 30.000 VNĐ - 100.000 VNĐ
                      </a>
                      <a
                        href="/"
                        className="list-group-item list-group-item-action"
                      >
                        Từ 100.000 VNĐ - 500.000 VNĐ
                      </a>
                      <a
                        href="/"
                        className="list-group-item list-group-item-action"
                      >
                        Trên 500.000 VNĐ
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
}

export default HomePage;
