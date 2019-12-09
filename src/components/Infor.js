/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { PureComponent } from 'react';
import './App.css';
import './extra.css';
import './shard.dashboard.css';
import MenuContainer from '../containers/MenuContainer';
import img from '../logo512.png';
import TagInput from './TagInput';

class Infor extends PureComponent {
  render() {
    const st = this.props;
    // if (st.isLogin === false) {
    //   window.location.href = '/login';
    // }
    const selectedTags = tags => {
      console.log(tags);
    };
    return (
      <div>
        <MenuContainer />
        <div
          className="alert alert-success alert-dismissible fade show mb-0"
          role="alert"
        >
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
          <i className="fa fa-check mx-2" />
          <strong>Success!</strong> Your profile has been updated!{' '}
        </div>
        <div className="main-content-container container-fluid px-4">
          <div className="row mt-md-4">
            <div className="col-lg-4">
              <div className="card card-small mb-4 pt-3">
                <div className="card-header border-bottom text-center">
                  <div className="mb-3 mx-auto m-md-5">
                    {st.image ? (
                      <img
                        className="rounded-circle"
                        src={st.image}
                        alt=""
                        width="110"
                        height="110"
                      />
                    ) : (
                      <img
                        className="rounded-circle"
                        src={img}
                        alt=""
                        width="110"
                        height="110"
                      />
                    )}
                  </div>
                  {st.role === 'tutor' && (
                    <span className="text-muted d-block mb-2"> Gia sư</span>
                  )}
                  {st.role === 'learner' && (
                    <span className="text-muted d-block mb-2"> Người học</span>
                  )}
                  <h4 className="mb-0">{st.name}</h4>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item p-4">
                    <strong className="text-muted d-block mb-2">
                      Giới thiệu ngắn
                    </strong>
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Odio eaque, quidem, commodi soluta qui quae minima
                      obcaecati quod dolorum sint alias, possimus illum
                      assumenda eligendi cumque?
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="card card-small mb-4">
                <div className="card-header border-bottom">
                  <h6 className="m-0">Thông tin cá nhân</h6>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item p-3">
                    <div className="row">
                      <div className="col">
                        <form>
                          <div className="form-group ">
                            <label htmlFor="feFirstName">Họ và tên</label>
                            <input
                              type="text"
                              className="form-control"
                              id="feFirstName"
                              placeholder="Họ và tên"
                              defaultValue={st.name}
                            />{' '}
                          </div>

                          <div className="form-group">
                            <label htmlFor="feInputAddress">Địa chỉ</label>
                            <input
                              type="text"
                              className="form-control"
                              id="feInputAddress"
                              placeholder="1234 Main St"
                            />{' '}
                          </div>

                          <button type="button" className="btn btn-info">
                            Cập nhật
                          </button>
                        </form>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              {st.role === 'tutor' && (
                <div className="card card-small mb-4">
                  <div className="card-header border-bottom">
                    <h6 className="m-0">Giới thiệu bản thân</h6>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item p-3">
                      <div className="row">
                        <div className="col">
                          <form>
                            <div className="form-row">
                              <div className="form-group col-md-12">
                                <label htmlFor="feDescription">
                                  Giới thiệu bản thân
                                </label>
                                <textarea
                                  className="form-control"
                                  name="feDescription"
                                  rows="5"
                                >
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Odio eaque, quidem, commodi
                                  soluta qui quae minima obcaecati quod dolorum
                                  sint alias, possimus illum assumenda eligendi
                                  cumque?
                                </textarea>
                              </div>
                            </div>

                            <button type="button" className="btn btn-info">
                              Cập nhật
                            </button>
                          </form>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              )}
              {st.role === 'tutor' && (
                <div className="card card-small mb-4">
                  <div className="card-header border-bottom">
                    <h6 className="m-0">Thông tin kỹ năng</h6>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item p-3">
                      <div className="row">
                        <div className="col">
                          <form>
                            <div>
                              <label htmlFor="feDescription">Tag kĩ năng</label>
                              <TagInput selectedTags={selectedTags} tags={[]} />
                            </div>

                            <button type="button" className="btn btn-info">
                              Cập nhật
                            </button>
                          </form>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              )}
              {st.role === 'tutor' && (
                <div className="card card-small mb-4">
                  <div className="card-header border-bottom">
                    <h6 className="m-0">Thông tin giá theo giờ</h6>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item p-3">
                      <div className="row">
                        <div className="col">
                          <form>
                            <div className="form-group">
                              <label htmlFor="feInputAddress">
                                Giá theo giờ:
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="feInputCost"
                                placeholder="100000"
                              />{' '}
                            </div>

                            <button type="button" className="btn btn-info">
                              Cập nhật
                            </button>
                          </form>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              )}
              <div className="card card-small mb-4">
                <div className="card-header border-bottom">
                  <h6 className="m-0">Ảnh đại diện</h6>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item p-3">
                    <div className="row">
                      <div className="col">
                        <form>
                          <input
                            type="file"
                            name="file"
                            onChange={async e => {
                              const { files } = e.target;
                              const data = new FormData();
                              data.append('file', files[0]);
                              data.append('upload_preset', 'applon');
                              this.loading = true;
                              // eslint-disable-next-line no-undef
                              const res = await fetch(
                                
                                'https://api.cloudinary.com/v1_1/ddifartbn/image/upload',
                                {
                                  method: 'POST',
                                  body: data
                                }
                              );
                              const file = await res.json();

                              // link 
                              this.image = file.url;

                              this.loading = false;
                            }}
                          />

                          <button type="button" className="btn btn-info">
                            Cập nhật
                          </button>
                        </form>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- End Default Light Table --> */}
        </div>
      </div>
    );
  }
}

export default Infor;
