import React from 'react';
import '../App.css';

import img from './logo192.png';

function CardTutor(data) {
  if (!data) {
    return <div />;
  }

  const handleClickDetails=(_id)=>{
    window.location = `/detailstutor&id=${_id}`;
  };

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
      <div className="col-lg m-auto ">
        {
          tutor.image ?
            <img src={tutor.image} className="md-avatar " alt="..." /> :
            <img src={img} className="md-avatar round mx-auto d-block" alt="..." />
        }
        <h5 className="card-title text-center ">{tutor.name}</h5>
        <div style={{ minHeight: "40px" }}>
          <h7 className=" card-title m-md-2 crop-text">Địa chỉ: {tutor.address || " Chưa cập nhật"}</h7>
        </div>
        <div style={{ minHeight: "40px" }}>
          <h7 className=" card-title m-md-2 crop-text" >Kỹ năng: {tag || "Chưa cập nhật"}</h7>
        </div>
        <div>
          <h7 className="d-block card-title m-md-2">Số hợp đồng: {tutor.numOfContracts}</h7>
        </div>
        <div style={{ minHeight: "40px" }}>
          <h7 className="d-block card-title m-md-2">Giá theo giờ: {tutor.price || "Chưa cập nhật"} (KVNĐ)</h7>
        </div>
        <hr />
        <div className="row float-right d-block mb-md-2">
          <button
            type="button"
            className="btn myct my-2 m-md-2 "
            onClick={()=>{
              handleClickDetails(tutor._id);
            }}
          >
            Xem chi tiết
          </button>
          <button
            type="button"
            className="btn btn-success my-2 m-md-2 "
            onClick={()=>{
              if(!data.isLogin){
                window.location.href = "/login";
              }
            }}
          >
            Thuê
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardTutor;
