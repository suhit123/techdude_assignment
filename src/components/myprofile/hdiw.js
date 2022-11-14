import '../styles/hdiw.css';
import WorkBlock from './WordkBlock';
const Hdiw=()=>{
return(<div className="howdoesitwork">
                <h1>How does it works ?</h1>
                <div className='hdiw1'>
                <WorkBlock source = "https://i.ibb.co/vQHj32R/png1.png" header = "Invite your Friends" tagline="Share the link tutedude.com with your friends"/>
                <WorkBlock source = "https://i.ibb.co/d2k0LgJ/img-3.png" header = "Friend purchases any course" tagline="Using your REFERRAL CODE in the payments page"/>
                <WorkBlock source = "https://i.ibb.co/vq5Tt1Y/img-1.png" header = "You get ₹ 200 as referral money" tagline="On total purchase the friend makes, into your wallet"/>
                <WorkBlock source = "https://i.ibb.co/7rNSZBK/img-4.png" header = "Your Friend gets ₹ 200 Off " tagline="On his overall fee on successful purchase using your referral code "/>
                <WorkBlock source = "https://i.ibb.co/G9y0xHm/img-2.png" header = "Transfer money from wallet" tagline="When the wallet balance reaches₹200 or more, you can withdraw it"/>
                </div>
            </div>);
};
export default Hdiw;