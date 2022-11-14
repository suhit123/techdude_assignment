import React from 'react';
import {Link} from "react-router-dom";
import '../components/styles/enrollpage.css';
import Referealcards from '../components/referalcard.json' ;
import Refer from '../components/enrollpage/cards_referal';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {useState} from 'react';
function EnrollPage(props) {
    const[check_mark,setCheck_mark]=useState("no_checkmark");
    const RefCode = "E D C H 5 4"
    const Balance = 500
    return (
        <div className='econtainer'>
            <p id='eui_ux'> UI/UX 
                &#10148; 
                <Link to={"/"}><button>Refer & Earn</button></Link>
                &#10148;
                <Link to={"/enrollpage"}><button>Friends Referred</button></Link>
            </p>
            <Link id='go_back_link' to={"/"}><button id='go_back'><span id='go_back_span'>←</span> go back</button></Link>
            <div className="linearrange">
            <div className="referalcodeblock">
                <h3 className="referalheader">Your referal code</h3>
                <CopyToClipboard onCopy={()=>(setCheck_mark("yes_checkmark"))} id='clipboard' text={RefCode}><p className="referalcode">{RefCode}</p></CopyToClipboard>
                <p className={check_mark}>Copied ✅</p>
            </div>
                <div className="walletbalance">
                    <h3 className="balanceheader">Wallet Balance</h3>
                    <p className="balance">₹{Balance}</p>
                </div>
            </div>
            <div className="friendsenroll">
                <h2 id='frndsenroll'>Friends who enrolled ({Referealcards.length})</h2>
                <div className="friendcard">
                    {Referealcards.map((item)=>(<div className='friendcard_childs'><Refer name={item.name} 
                                                      date={item.date}
                                                      courses={item.courses}
                                                      referalammount={item.referalammount}
                    /></div>))}
                </div>
            </div>
            <Link className={"linkt&c"} to={"/terms-and-conditions"}><button id='e_tandc'>Terms & Conditions</button></Link>
        </div>
    );
}

export default EnrollPage;
