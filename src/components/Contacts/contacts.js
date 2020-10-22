import React from 'react';
import useFetch from '../../hooks/useFetch'
import MiniCards from './MiniCards'
import './styles/contacts.css'

const Contacts = () => {
    const {data, error, loading } = useFetch("https://api.opendota.com/api/heroes");
    var persons = data.slice(0,12);
    if (loading){
        return(<p>Loading!!</p>);
    }
    if (error)
    {
        return(<p>Error</p>);
    }
    if (data){
        console.log(data);
        return(
            <div className="container-contacts">
                <MiniCards persons={persons}/>
            </div>
        )
    }
}

export default Contacts