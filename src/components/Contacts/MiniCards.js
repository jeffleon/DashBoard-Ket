import React from 'react';
import facebook from '../../assets/images/facebook.png'
import gmail from '../../assets/images/gmail.png'
import phone from '../../assets/images/telefono.png'

/* This component its a subpart of the component contacts this component render de short card that has the 
way to contact with the leads*/
const MiniCards = ({persons}) =>{
    return(
        <div>
            {persons&&persons.map((element, index)=>{
                return(
                    <div className={"minicards"} key={index}>
                        <div className="titleMinicard">
                            <img width="12" height="12" className="img-minicard" src={index%2===0?facebook:index%3===0?gmail:phone}/>
                            {index%2===0?"FACEBOOK":index%3===0?"MAIL":"WHATSAPP"}
                        </div>{element.name.split("_")[3]}
                    </div>
                    )
                })
            }
        </div>
    )
}

export default MiniCards;