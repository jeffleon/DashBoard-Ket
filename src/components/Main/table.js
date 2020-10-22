import React from 'react';
import useFetch from '../../hooks/useFetch';
import circleAc from '../../assets/images/circleAc.png';
import circleDis from '../../assets/images/circleDis.png';

/* First of all this component use a custome hook to do a fetch in a dota API and then with this data display 
    the sub part of the component  Main named Table*/
const Table = ( ) => {
    const {data, error, loading } = useFetch("https://api.opendota.com/api/heroes")
    var persons = data.slice(0,5)
    if (error){
        return(
            <p>Error</p>
        )
    }
    if (loading){
        return(
            <p>Loading</p>
        )
    }
    if (data){
        return(
            <div>
                <table style={{width:"100%"}}>
                    <tbody>
                        {persons.map((element, index)=>{
                        return(
                            <tr className="text-table" key={index}>
                                <td className="ml-3">{element.name.split("_")[3]}</td>
                                <td className="text-table"><strong>Llamar</strong><p className="subtitleTable">Descuento temporada</p></td>
                                <td><img src={index%2===0?circleAc:circleDis}/></td>
                                <td><i className="fa fa-phone icon" aria-hidden="true"></i></td>
                                <td><i className="fa fa-comment-o icon" aria-hidden="true"></i></td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;