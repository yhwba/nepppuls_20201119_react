import { render } from "@testing-library/react"
// import type from "t"

import React from "react";
import Badge from "./Badge";


function NameTag(props){
    // let name ="누군ㄱㅏ의이름";

    let color =props.color;
    let name =props.name;
    let tag =props.tag;
    let img =props.img;

    let color_stat = (<Badge color={color}/>)

    let tag_app =(  
        <div className="NameTag">
            <img src={img} />
            {name} / {tag} / {color_stat}
        </div>)
    
    return tag_app
        
}
export default NameTag;