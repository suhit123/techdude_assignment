import React from "react";
import '../styles/wordblock.css';
export default function  WorkBlock  (props)  {
    const values = {
        source: props.source,
        header: props.header,
        tagline: props.tagline
    }
    return(
        <div className="workblockitem">
            <div id="workpng_img"><img className="workpng" src={values.source}  alt={"workpng.png"}/></div>
            <div className="workblockitem1">
            <h3 className="workheader"> {values.header}</h3>
            <p className="worktagline">{values.tagline}</p>
            </div>
        </div>
    );
}