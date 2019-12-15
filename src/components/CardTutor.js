import React from 'react';
import './App.css';

import img from '../logo512.png';

function CardTutor(data) {
  const { tutor } = data;
  const { tags } = tutor;
  const n = tags.length;
  let i = 0;
  let tag = "";

  for (i = 0; i < n - 1; i += 1) {
    tag = `${tag}${tags[i]} | `;
  }

  if (i < n) {
    tag = `${tag}${tags[i]}`;
  }

  return (
    <div className="m-auto typical">
      <div className="col m-auto">
        {
          tutor.image ?
            <img src={tutor.image} className="md-avatar " alt="..." /> :
            <img src={img} className="md-avatar round mx-auto d-block" alt="..." />
        }
        <h5 className="card-title text-center ">{tutor.name}</h5>
        {tutor.address ? <h7 className="d-block card-title m-md-2">Địa chỉ: {tutor.address}</h7>
          : <h7 className="d-block card-title m-md-2">Địa chỉ: Chưa cập nhật</h7>}
        {tags ? <h7 className="d-block card-title m-md-2">Kỹ năng: {tag}</h7>
          : <h7 className="d-block card-title m-md-2">Kỹ năng: Chưa cập nhật</h7>}
        <div>
          {tutor.price ? <h7 className="d-block card-title m-md-2">Giá theo giờ: {tutor.price}K</h7>
            : <h7 className="d-block card-title m-md-2">Giá theo giờ: Chưa cập nhật</h7>}
        </div>
        <div className="row">
          <button
            type="button"
            className="btn myct my-3"
          >
            Xem chi tiết
          </button>
          <button
            type="button"
            className="btn btn-success myth my-3"
          >
            Thuê
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardTutor;
