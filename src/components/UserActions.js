/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavItem,
  NavLink
} from "shards-react";
import Avatar from 'react-avatar';
import './App.css';
import img from '../logo512.png';

export default class UserActions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.toggleUserActions = this.toggleUserActions.bind(this);
  }

  toggleUserActions() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    const st = this.props;

    return (
      <NavItem tag={Dropdown} caret toggle={this.toggleUserActions} className="useractions">
        <DropdownToggle caret tag={NavLink}>
          {
            st.image
              ? <Avatar size="35" round className="avatar" src={st.image} />
              : <Avatar size="35" round className="avatar" src={img} />
          }

          <span className="d-none d-md-inline-block">{st.name}</span>
        </DropdownToggle>
        {
          st.role === 'tutor' ?
            <Collapse tag={DropdownMenu} right small open={this.state.visible}>
              <DropdownItem tag={Link} to="user-profile" onClick={() => {
                st.getInfo(st.token);
                window.location.href = './infor';
              }}>
                <i className="material-icons" /> Quản lý cá nhân
              </DropdownItem>
              <DropdownItem tag={Link} to="file-manager-list"
              onClick={() => {
                window.location.href = './tutorcontract';
              }}>
                <i className="material-icons" /> Quản lý lớp học
              </DropdownItem>
              <DropdownItem tag={Link} to="transaction-history">
                <i className="material-icons" /> Thống kê doanh thu
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem className="text-danger" onClick={st.logout}>
                <i className="material-icons text-danger" /> Đăng xuất
              </DropdownItem>
            </Collapse> :
            <Collapse tag={DropdownMenu} right small open={this.state.visible}>
              <DropdownItem tag={Link} to="user-profile" onClick={() => { window.location.href = './infor'; }}>
                <i className="material-icons" /> Quản lý cá nhân
              </DropdownItem>
              <DropdownItem tag={Link} to="file-manager-list">
                <i className="material-icons" /> Quản lý hợp đồng
              </DropdownItem>
              <DropdownItem tag={Link} to="transaction-history">
                <i className="material-icons" /> Lớp học của tôi
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem className="text-danger" onClick={st.logout}>
                <i className="material-icons text-danger" /> Đăng xuất
              </DropdownItem>
            </Collapse>
        }

      </NavItem>
    );
  }
}
