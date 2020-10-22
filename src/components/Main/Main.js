import React from 'react';
import './styles/main.css';
import {Input, InputGroup} from 'reactstrap';
import DropDown from './dropdown';
import LinearProgressWithLabel from './LinearProgressWithLabel';
import CircularWithValueLabel from './CircularWithValueLabel';
import CardRender from './Cardrender';
import Table from './table';
/* This component render de main part of the desktop the center of the desktop*/
const Main = () => {
    return(
        <div className="container-main">
             <InputGroup className="item-search">
                <i className="fa fa-search iconSearch" aria-hidden="true"></i>
                <Input className="input" placeholder="    Search..." bsSize="sm"></Input>
                <i className="fa fa-filter m-2" aria-hidden="true"></i>
            </InputGroup>
            <DropDown className="item-date" />
            <div className="item-user">
                <h2>Hello, Jose</h2>
            </div>
            <div className="container-card">
                <div className="item-porcentage">
                    <CircularWithValueLabel className="procentage" value={50}/>
                </div>
                <p className="text">Leads obtenidos</p>
                <p className="text"><strong>50/100</strong></p>
                <p className="text">Cola de llamadas</p>
                <p className="text"><strong>50/100</strong></p>
                <p className="text">Matriculas Finalizadas</p>
                <p className="text"><strong>10/100</strong></p>
            </div>
            <div className="container-card-2">
                <h4 className="m-2" >Meta Grupal</h4>
                <p className="text m-2">Leads obtenidos <span><strong>200/400</strong></span></p>
                <LinearProgressWithLabel/>
                <p className="text m-2">Matriculas realizadas <span className="mr-4"><strong>50/100</strong></span></p>
                <LinearProgressWithLabel />
            </div>
            <div className="container-planing">
                <h2 className="title-planing">Tu plan de hoy</h2>
            </div>
            <div className="item-calls">
                <p className="text">ir a la gestion de llamada <i className="fa fa-angle-right" aria-hidden="true"></i></p>
            </div>
            <div className="container-table">
                <h4 className="m-2">Conexiones de agenda para hoy</h4>
                <Table/>
            </div>
            <div className="container-cards">
                <CardRender description={"item-card-leads-primero"} text={"Leads de primer contacto"}/>
                <CardRender description={"item-card-leads-segundo"} text={"Leads por confirmar cita"}/>
                <CardRender description={"item-card-leads-ultimo"} text={"Leads de ultimo intento"}/>
            </div>
        </div>
    )
}

export default Main