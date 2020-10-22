import React, {useState} from 'react';
import './styles/navbar.css'
import ket from '../../assets/images/ket-logo.png'
import homeDis from '../../assets/images/houses-dis.png'
import homeAc from '../../assets/images/houses-ac.png'
import paperDis from '../../assets/images/document-dis.png'
import paperAc from '../../assets/images/document-ac.png'
import messageDis from '../../assets/images/message-dis.png'
import messageAc from '../../assets/images/message-ac.png'
import Avatar from '@material-ui/core/Avatar';
import avatarFoto from '../../assets/images/avatar.jpg'

/* This component its one of the 3 most important parts this component render a navbar*/
const Navbar = () => {
    var [selected, setSelected] = useState(0);
    var number = (e) =>{
        setSelected(e.target.getAttribute('value'));
    }
    return(
        <div className="container-navbar">
            <img src={ket}></img>
            <span><img key={1} value="1" width="20" height="20" onClick={number} src={selected === "1"?homeAc:homeDis}></img></span>
            <span><img key={2} value="2" width="20" height="20" onClick={number} src={selected === "2"?paperAc:paperDis}></img></span>
            <span><img key={3} value="3" width="20" height="20" onClick={number} src={selected === "3"?paperAc:paperDis}></img></span>
            <span className="itemMessage"><img  key={4} width="20" value="4" onClick={number} height="20" src={selected === "4"?messageAc:messageDis}></img></span>
            <Avatar className="itemAvatar" alt="avatar" src={avatarFoto}>p</Avatar>
        </div>
    )
}

export default Navbar