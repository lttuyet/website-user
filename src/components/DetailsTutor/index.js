/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-cond-assign */
/* eslint-disable no-return-assign */
import React, { PureComponent } from 'react';
import '../App.css';
import './detailsTutor.css';
import { callAPI } from '../../utils/apiCaller';
import Menu from '../../containers/MenuContainer';
import InfoTutor from '../../containers/InfoTutorContainer';
import ListPages from '../ListTutors/ListPages';
import img from '../ListTutors/logo192.png';
import ShowRating from './ShowRating';



class DetailsTutor extends PureComponent {
  constructor(props) {
    super(props);
    const prs = this.props;

    this.state = {
      id: prs.match.params.id,
      tutor: {},
      contracts: [],
      tags: [],
      error: 0,
      page: 0,
      loaded:false
    };
  }

  componentDidMount() {
    const st = this.state;

    this.getTutor(st.id);
  }

  getTutor = async id => {
    try {
      const res = await callAPI('user/detailstutor', 'POST', { id });

      if (res.data.status === 'failed') {
        this.setState({
          error:"res.data.message"
        });
      }

      this.setState({
        tutor: res.data.tutor,
        tags: res.data.tags,
        contracts: res.data.contracts,
        error: 0,
        page: 0,
        loaded:true
      });
    } catch (e) {
      this.setState({
        error: 2
      });
    }
  };

  setPage(current) {
    this.setState({
      page: current
    });
  }

  render() {
    const st = this.state;
    let {error} = st;    

    // Danh sách hợp đồng
    const listContracts=st.contracts.map((contract)=>{
        return(
            <div></div>
        );
    })
    
    return (
      <div className="bg-light container-fluid">
        <Menu/>
        {st.error !== 0 ? (
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
            <strong>Thất bại!</strong>
            {error}
          </div>
        ) : (
          <div>
            <nav aria-label="breadcrumb ">
              <ol className="breadcrumb bg-white ">
                <li className="breadcrumb-item text-info">
                  <a href="/">Trang chủ</a>
                </li>
                <li className="breadcrumb-item text-info">
                  <a href="/listtutors">Danh sách gia sư</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {st.tutor.name}
                </li>
              </ol>
            </nav>
            <div className="row">
            <div className="container col-4">
              <div className="card mt-md-1">
                <div className="container card-body">
                  <div className="wrapper ">
                    <InfoTutor tutor={st.tutor} contracts={st.contracts} tags={st.tags}/>
                   </div>
                </div>
              </div>
            </div>
            <div className="container col-8">
            <div className="row m-md-2 mb-md-1">
                    <h4 className="separate text-center text-danger">ĐÁNH GIÁ TỪ NGƯỜI HỌC</h4>
            </div>
            <div className="myscroll">
{/* Dưới này là 1 comment */}
            <div className="card text-left container " >
              <div className="card-body mycard" >
                <div className="row ">
                  <div className="col-2 media">
                    <img
                      className="align-self-center mr-3 mx-auto"
                      style={{ height: '100px', width: '100px' }}
                      src={img}
                      alt="..."
                    />
                  </div>
                  <div className="card-text col-9 ">
                    <div className="row ml-md-1  mt-md-2">
                      <div className="col-3">
                        <h5 className="card-title float-left">
                          {st.tutor.name}
                        </h5>
                      </div>
                      <div className="col-9 ">
                        <div className="float-right">
                          <span>
                            {' '}
                            Thời gian học : ( --/--/--- đến --/--/--- )
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="row">
                      <div className="col-9 ">
                        <div className="float-left ml-md-2">Tình trạng hợp đồng:</div>
                      </div>
                      <div className="col-3">
                       <span className=""> Đánh giá: </span>
                        <div className="rating float-right">
                            <ShowRating/>
                          </div>
                      </div>
                    </div>
                    
                    <div className="row ">
                        <div className="ml-md-4">
                      
                        Eu eum corpora torquatos, ne postea constituto mea, quo
                        tale lorem facer no. Ut sed odio appetere partiendo, quo
                        meliore salutandi ex.
                      
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            </div>
            </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default DetailsTutor;
