import '../styles/referalbox.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useState } from 'react';
const Referalbox=()=>{
const RefCode = "E D C H 5 4";
const[check_mark,setCheck_mark]=useState("no_checkmark");
return(
    <div className="refblock2">
        <h2 className="refcodeheader">Your Referal Code</h2>
        <CopyToClipboard onCopy={()=>(setCheck_mark("yes_checkmark"))} id='clipboard' text={RefCode}><p className="refcode">{RefCode}</p></CopyToClipboard>
        <p className={check_mark}>Copied ✅</p>
    </div>
);
};
export default Referalbox;