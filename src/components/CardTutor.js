import React from 'react';
import './App.css';

import img from '../logo512.png';

function CardTutor() {
  return (
    <div className="ml-md-2 myshadow row" style={{ width: '480px' }}>
      <img src={img} className="md-avatar " alt="..." />
      <div className="align-self-right col m-md-3 mt-md-5">
        <h5 className="card-title">Tên Gia sư</h5>
        <p className="card-text">Giới thiệu sơ lược về gia sư</p>
        <div className="row">
          <span className="badge badge-info ml-md-1">Tag kĩ năng</span>
          <span className="badge badge-danger ml-md-1">Lớp</span>
        </div>
        <div className="row ">
        <h7 className="card-title m-md-2">Giá theo giờ: 30.000 VNĐ</h7>
        </div>
        <div className="row">
          <button
            type="button"
            data-toggle="modal"
            data-target="#exampleModalScrollable"
            className="btn mybg my-2 m-sm-2"
          >
            Xem chi tiết
          </button>
          <a href="/" className="btn btn-success my-2 m-sm-2">
            Thuê
          </a>
          <div
            className="modal fade"
            style={{ padding: '2px !important;' }}
            id="exampleModalScrollable"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalScrollableTitle"
            aria-hidden="true"
          >
            <div
              className="modal-dialog modal-dialog-scrollable"
              role="document"
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalScrollableTitle">
                    Thông tin chi tiết
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body m-md-1 ml-md-0 ">
                  <div className="card mydialog">
                    <img
                      src={img}
                      className="card-img-top w-50 mx-auto"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Tên gia sư</h5>
                      <hr />
                      <p className="card-text">
                        <h5 className="card-title">Địa chỉ:</h5>
                        Some quick example text to build on the card title and
                        make up the bulk of the card content.
                      </p>

                      <p className="card-text">
                        <h5 className="card-title">Thông tin mô tả:</h5>
                        Some quick example text to build on the card title and
                        make up the bulk of the card content.
                      </p>
                      <div>
                        <h5 className="card-title">Kỹ năng:</h5>
                        <span className="badge badge-info ml-md-1">
                          Tag kĩ năng
                        </span>
                        <span className="badge badge-danger ml-md-1">Lớp</span>
                      </div>
                      <hr/>
                      <div>
                      <h5 className="card-title m-md-2">Giá theo giờ: 30.000 VNĐ</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardTutor;
