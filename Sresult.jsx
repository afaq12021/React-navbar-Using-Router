import React from "react"

const Sresult=(props)=>{
    const img =`https://picsum.photos/200/300?${props.name}`
    return(
        <>
            <img src={img} alt="random images" />
        </>
    );
}
export default Sresult;