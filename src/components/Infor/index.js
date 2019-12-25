import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import '../App.css';
import '../extra.css';
import '../shard.dashboard.css';
import MenuContainer from '../../containers/MenuContainer';
import { callAPIAuth } from '../../utils/apiCaller';
import CardInfo from './CardInfo';
import ImageInfo from './ImageInfo';
import PersonalInfo from './PersonalInfo';
import TutorInfo from './TutorInfo';

class Infor extends PureComponent {
  constructor(props) {
    super(props);

    this.handleBasicInfo = this.handleBasicInfo.bind(this);
    this.handleInfo = this.handleInfo.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleTutorInfo = this.handleTutorInfo.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      user: null,
      typeInfo: 0,
      info: ''
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
        typeInfo: 0,
        info: ''
      });
    } catch (e) {
      this.setState({
        info: 'Lấy thông tin người dùng thất bại!'
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
        price: user.price,
        role: user.role
      }
    });
  }

  handleBasicInfo(name, address) {
    const { user } = this.state;

    this.setState({
      user: {
        name,
        image: user.image,
        address,
        intro: user.intro,
        tags: user.tags,
        price: user.price,
        role: user.role
      }
    });
  }

  handleTutorInfo(intro, tags, price) {
    const { user } = this.state;

    this.setState({
      user: {
        name: user.name,
        image: user.image,
        address: user.address,
        intro,
        tags,
        price,
        role: user.role
      }
    });
  }

  handleClose() {
    this.setState({
      typeInfo: 0,
      info: ''
    });
  }



  render() {
    const st = this.props;
    const { state } = this;
    let personal = null;
    let tutor = null;

    if (state.user) {
      personal = {
        name: state.user.name,
        address: state.user.address,
        token: st.token
      };

      try {
        tutor = {
          intro: state.user.intro,
          tags: state.user.tags,
          price: state.user.price
        };
      } catch (e) {
        tutor = {
          intro: '',
          tags: {},
          price: ''
        };
      }
    };

    if (!st.isLogin) {
      return <Redirect to="/login" />;
    }

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
              data-dismiss={this.handleClose}
              aria-label="Close"
            >
              <span aria-hidden="true" onClick={this.handleClose}>×</span>
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
              {state.user && (
                <PersonalInfo value={personal} handleInfo={this.handleInfo} handleBasicInfo={this.handleBasicInfo} updateName={st.updateName} />
              )}
              {(st.role === 'tutor' && state.user) && (
                < TutorInfo value={tutor} handleInfo={this.handleInfo} handleTutorInfo={this.handleTutorInfo} token={st.token} />

              )}
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default Infor;