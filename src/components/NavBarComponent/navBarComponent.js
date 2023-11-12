import React from "react";

const NavBarComponent =()=>{
    const renderNavBar=(vals,option)=>{
       
        switch (option) {
            case 'text': 
                {
                    return vals.map((val)=>{
                       return <li>{val}</li>
                    })
                }               
                break;
            default:
                break;
        }
    };
    return (
        <div>
            <h5>Danh mục sản phẩm</h5>
            {renderNavBar(['cong','nam','danh'],'text')}
        </div>  
    )
}
export default  NavBarComponent 