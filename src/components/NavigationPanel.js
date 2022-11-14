import {Link} from 'react-router-dom'
import './styles/nav.css'
function NavigationPanel(props) {

    return (
        <nav>
            <img id='logo' src={"https://media-exp1.licdn.com/dms/image/C560BAQEr6EFwGmCKgQ/company-logo_200_200/0/1598972717451?e=2159024400&v=beta&t=k7CnhFRZui5v2UXii-Y-ZXOGHXuE0pQcCarItnrzqRo"} alt={"logo.png"} />
            <div className='nav_links'>
            <Link to={"/my-assignment"}><button className='nav_items'>My Assignment</button></Link>
            <Link to={"/chat-with-mentor"}><button className='nav_items'>Chat with Mentor</button></Link>
            <div id='profile_button'><img id='profile_img' src={"https://i.ibb.co/9NymrZ4/img.png"} alt={"profile.png"} width={"100px"} height={"100px"}/><Link to={"/"}><button id='profile_name'>Profile Name ▼</button></Link></div>
            </div>
        </nav>
    );
}

export default NavigationPanel;