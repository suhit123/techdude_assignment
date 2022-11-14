import '../styles/withdrawalbox.css';
const Withdrawbalance =()=>{
    const ReferalEarnings = 2500;
    const TotalRefers = 7;
    const WalletBalance = 500;
    return(
    <div className="refblock1">
        <div id='refblock1_1'>
                <div className='refblock1_cont'>
                    <h2 className="refheadings">Referal Earnings</h2>
                    <p className="refval">₹{ReferalEarnings}</p>
                </div>
                <div className='refblock1_cont'>
                    <h2 className="refheadings">Total Referrals</h2>
                    <p className="refval">{TotalRefers}</p>
                </div>
                <div className='refblock1_cont'>
                    <h2 className="refheadings">Wallet Balance</h2>
                    <p className="refval">₹{WalletBalance}</p>
                </div>
                </div>
                <div id='withdraw_btn'><button id="withdrawbutton">Withdraw Balance</button></div>
    </div>
);
};
export default Withdrawbalance;