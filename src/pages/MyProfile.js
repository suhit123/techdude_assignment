import React from 'react';
import {Link} from "react-router-dom";
import '../components/styles/myprofile.css'
import Withdrawbalance from '../components/myprofile/withdrawbalance';
import Referalbox from '../components/myprofile/Referalbox';
import Hdiw from '../components/myprofile/hdiw';
function MyProfile(props) {
    return (
        <div className='container'>
            <div ><p id='ui_ux'> UI/UX &#10148; Refer & Earn</p></div>
            <div className="mainrefblocks">
                <Withdrawbalance/>
                <Referalbox/>
            </div>
            <Hdiw/>
            <div className='bottom_links'><Link className={"linkenroll"} to={"/enrollpage"}><button>Friends who enrolled</button></Link></div>
            <div className='bottom_links'><Link className={"linkt&c"} to={"/terms-and-conditions"}><button>Terms & Conditions</button></Link></div>

        </div>
    );
}

export default MyProfile;
