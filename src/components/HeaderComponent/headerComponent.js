import React from "react";
import logo from "../../assets/images/logo.png";
import TypeProduct from "../TypeProductComponent/TypeProductComponent";

const HeaderComponent =()=>{
    return (
        <div className="header">
        <div className="container-fluid">
            <div class="row">
                <div class="col-md-2 logo">
                    <img src={logo}/>
                </div>
                <div class="col-md-6 sreach-box">
                    <div class="input-group">
                        <input type="search" class="form-control rounded" placeholder="Tìm kiếm" aria-label="Search" aria-describedby="search-addon" />
                        <button type="button" class="btn btn-outline-primary">Tìm kiếm</button>
                    </div>
                </div>
                <div class="col-md-4 option">
                    <div class="task">
                        <i class="fa-solid fa-house"></i>
                        <a href="#"> Trang chủ</a>
                    </div>
                    <div class="task">
                        <i class="fa-solid fa-face-smile"></i>
                        <a href="#"> Tài khoản</a>
                    </div>
                    <div class="task">
                        <i class="fa-solid fa-crown"></i>
                        <a href="#"> Astra</a>
                    </div>
                    <div class="task">
                        |
                    </div>
                    <div class="task">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <a href="#"> Giỏ hàng</a>

                    </div>
                   
                </div>
            </div>
        </div>
        <div className="typeProduct">
            <TypeProduct/>
        </div>
     
        </div>
    )       
}
export default  HeaderComponent
