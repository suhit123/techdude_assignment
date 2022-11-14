import '../styles/cards_referal.css'
const Refer=(props)=>{
return(
<div className="card_container">
    <div className="card_1strow">
        <p>{props.name}</p>
        <p>{props.date}</p>
    </div>
    <div className="card_2ndrow"><p>Courses Enrolled ( {props.courses.length} )</p>
        <div className='course_list'>{Array.prototype.map.call(props.courses, (x) => (<div className='course_items'>{x}</div>))}
        </div>
    </div>
    <p id='referalamount'>Referral Amount<span id="referalamount_span">{props.referalammount}</span></p>
</div>
);
};
export default Refer;