import React from "react";

const TypeProduct =()=>{
    const arr = ['tv','may tinh','dieu hoa','tu lanh'];
        return(     
        <>
            {
                arr.map(pro =>{
                    return(
                        <div>
                            {pro}
                        </div>
                    )
                })  
            }
        </>
    )
}
export default TypeProduct