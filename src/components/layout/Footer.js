import React, { PureComponent } from 'react';
// import UserActions from '../../containers/UserActionsContainers';
// import logo from '../../logotutor.PNG';

class Footer extends PureComponent {
  render() {
    
    return (
        
        <footer className="container-fluid bg-grey py-5 mt-md-5">
<div className="ml-md-5">
  
         <div className="row">
            <div className="col-md-5 ">
               <div className="logo-part">
                  <h3 className="text-info">UBER FOR TUTOR</h3>
                  <h5 className="text-primary"> Địa chỉ: </h5><p>227 Đường Nguyễn Văn Cừ, phường 4, Quận 5, Hồ Chí Minh</p>
                  <h5 className="text-primary"> Môn: </h5><p>Phát triển Ứng dụng web nâng cao - 2019</p>
               </div>
            </div>   
            <div className="col-md-7 mt-md-5">
               <h5 className="text-primary"> Sinh viên thực hiện: </h5>
               <p> 1612794 - Lê Thị Tuyết | 1612839 - Từ Kim Huỳnh Anh</p>
               <h5 className="text-primary"> Giới thiệu sơ lược: </h5>
               <p>Bài giói thiệu ahihi</p>
               
            </div>
        
      
   </div>
</div>
</footer>
    );
  }
}



export default Footer;
