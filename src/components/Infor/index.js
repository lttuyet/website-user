/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import '../App.css';
import '../extra.css';
import '../shard.dashboard.css';
import MenuContainer from '../../containers/MenuContainer';
import TagInput from '../TagInput';
import { callAPIAuth } from '../../utils/apiCaller';
import CardInfo from './CardInfo';
import ImageInfo from './ImageInfo';


class Infor extends PureComponent {
  constructor(props) {
    super(props);

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleInfo = this.handleInfo.bind(this);
    this.handleImage = this.handleImage.bind(this);

    this.state = {
      user: null,
      name: '',
      address: '',
      intro: '',
      temp: {
        name: '',
        address: '',
        intro: ''
      },
      error: 0
    };
  }

  componentDidMount() {
    this.getUser();
  }

  getUser = async () => {
    try {
      const { token } = this.props;

      const res = await callAPIAuth('me', 'GET', token, {});
      const { user } = res.data;

      this.setState({
        user,
        name: user.name,
        address: user.address,
        intro: user.intro,
        typeInfo: 0,
        info: '',
        image: '',
        temp: {
          name: user.name,
          address: user.address,
          intro: user.intro
        },
        error: 0
      });
    } catch (e) {
      this.setState({
        error: 1
      });
    }

  }

  handleInfo(typeInfo, info) {
    this.setState({
      typeInfo,
      info
    });
  }

  handleImage(image) {
    const { user } = this.state;

    this.setState({
      user: {
        name: user.name,
        image,
        address: user.address,
        intro: user.intro,
        tags: user.tags,
        price: user.price
      }
    });
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  handleAddressChange(e) {
    this.setState({
      address: e.target.value
    });
  }

  render() {
    const st = this.props;
    const { state } = this;

    const { temp } = state;

    if (!st.isLogin) {
      return <Redirect to="/login" />;
    }

    const selectedTags = tags => {
      // console.log(tags);
    };

    return (
      <div>
        <MenuContainer />
        {state.typeInfo === 1 &&
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
            <strong>Thành công!</strong> {state.info}
          </div>}
        {state.typeInfo === 2 &&
          <div
            className="alert alert-danger alert-dismissible fade show mb-0"
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
            <strong>Thất bại!</strong> {state.info}
          </div>
        }
        <div className="main-content-container container-fluid px-4">
          <div className="row mt-md-4">
            <div className="col-lg-4">
              <CardInfo value={state.user} />
            </div>
            <div className="col-lg-8">
              {state.user && (
                <ImageInfo handleInfo={this.handleInfo} handleImage={this.handleImage} updateImage={st.updateImage} token={st.token} />
              )}
















              <div className="card card-small mb-4">
                <div className="card-header border-bottom">
                  <h6 className="m-0">Thông tin cá nhân</h6>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item p-3">
                    <div className="row">
                      <div className="col">
                        <form onSubmit={event => {
                          event.preventDefault();

                          const data = {
                            name: state.name,
                            address: state.address
                          };

                          // eslint-disable-next-line no-unused-vars
                          const result = callAPIAuth('updatebasic', 'POST', st.token, data).then((res) => {
                            try {
                              const { status } = res.data;

                              if (status === "failed") {
                                this.setState({
                                  typeInfo: 2,
                                  info: 'Thông tin cá nhân của bạn chưa được cập nhật!'
                                });
                              } else {
                                this.setState({
                                  typeInfo: 1,
                                  info: 'Thông tin cá nhân của bạn đã được cập nhật!',
                                  temp: {
                                    address: data.address
                                  }
                                });
                                st.updateName(state.name);
                              }
                            } catch (err) {
                              this.setState({ typeInfo: 2, info: 'Lỗi kết nối, vui lòng thử lại!' });
                            }
                          });
                        }}>
                          <div className="form-group ">
                            <label htmlFor="feFirstName">Họ và tên</label>
                            <input
                              type="text"
                              className="form-control"
                              id="feFirstName"
                              placeholder="Họ và tên"
                              defaultValue={state.name}
                              onChange={this.handleNameChange}
                            />
                          </div>

                          <div className="form-group">
                            <label htmlFor="feInputAddress">Địa chỉ</label>
                            <input
                              type="text"
                              className="form-control"
                              id="feInputAddress"
                              placeholder="Địa chỉ"
                              defaultValue={state.address}
                              onChange={this.handleAddressChange}
                            />
                          </div>

                          <button type="submit" className="btn btn-info">
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
            </div>
          </div>
          {/* <!-- End Default Light Table --> */}
        </div>
      </div >
    );
  }
}

export default Infor;
