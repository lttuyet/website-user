/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { PureComponent } from 'react';
import Avatar from 'react-avatar';
import '../App.css';
import '../extra.css';
import '../shard.dashboard.css';
import img from '../../logo512.png';

class Infor extends PureComponent {
    render() {
        const st = this.props;
        const user = st.value;

        if (!user) {
            return <div />;
        }

        const { tags } = user;
        const sizeTag = tags.length;
        let tag = '';
        let i;

        for (i = 0; i < sizeTag - 1; i += 1) {
            tag = `${tag}${tags[i].name} | `;
        }

        if (i < sizeTag) {
            tag = `${tag}${tags[i].name}`;
        }

        return (
            <div >
                <div className="card card-small mb-4 pt-3">
                    <div className="card-header border-bottom text-center">
                        <div className="mb-3 mx-auto m-md-1 mt-0">
                            {user.image ? (
                                <Avatar size="70" round className="avatar" src={user.image} />
                            ) : (
                                    <Avatar size="70" round className="avatar" src={img} />
                                )}
                        </div>
                        <div className=" mx-auto ">
                            {user.role === 'tutor' && (
                                <span className="text-muted d-block mb-2"> Gia sư</span>
                            )}
                            {user.role === 'learner' && (
                                <span className="text-muted d-block mb-2"> Người học</span>
                            )}
                        </div>

                        <h4 className="mb-0">{user.name}</h4>
                    </div>
                    {user.role === 'learner' ?
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item p-4">
                                <strong className="text-muted d-block mb-2">
                                    Địa chỉ
                                </strong>
                                <span>
                                    {user.address || "Chưa cập nhật"}
                                </span>
                            </li>
                        </ul> :
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item p-4">
                                <strong className="text-muted d-block mb-2">
                                    Địa chỉ
                                </strong>
                                <span>
                                    {user.address || "Chưa cập nhật"}
                                </span>
                            </li>
                            <li className="list-group-item p-4">
                                <strong className="text-muted d-block mb-2">
                                    Giới thiệu ngắn
                                </strong>
                                <span>
                                    {user.intro || "Chưa cập nhật"}
                                </span>
                            </li>
                            <li className="list-group-item p-4">
                                <strong className="text-muted d-block mb-2">
                                    Kỹ năng
                                </strong>
                                <span>
                                    {tag || "Chưa cập nhật"}
                                </span>
                            </li>
                            <li className="list-group-item p-4">
                                <strong className="text-muted d-block mb-2">
                                    Giá theo giờ
                                </strong>
                                <span>
                                    {`${user.intro} KVNĐ` || "Chưa cập nhật"}
                                </span>
                            </li>
                        </ul>
                    }
                </div>
            </div>
        );
    }
}

export default Infor;
