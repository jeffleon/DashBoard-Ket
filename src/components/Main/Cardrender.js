import React from 'react';
/* Card Renders show the leads that need they have to call for and a frist aproach second or last aproach*/
const CardRender = ({description, text}) => {
    return(
        <div className={description}>
            <div className={"canvas-"+ description}>
                <div className="circle">
                    <h3>30</h3>
                </div>
            </div>
            <div className={"text-"+ description}>
                <p className="text ml-2">{text}</p>
                <i className="fa fa-phone icon" aria-hidden="true"><p className="text">15</p></i>
                <i className="fa fa-comment-o icon" aria-hidden="true"><p className="text">15</p></i>
            </div>
        </div>
    )
}

export default CardRender;