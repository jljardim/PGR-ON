import React from 'react'

const Table =({campo1,campo2,campo3,campo4,campo5, filter, codigo, razao, documento, local}) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                    <th>{campo1}</th>
                    <th>{campo2}</th>
                    <th>{campo3}</th>
                    <th>{campo4}</th>
                    <th>{campo5}</th>
                    </tr>
                </thead>
                <tbody>
                    {filter.map((item) => {
                        return(
                            <tr>
                                <td>{`${item}.${codigo}`}</td>
                                <td>{`${item}.${razao}`}</td>
                                <td>{`${item}.${documento}`}</td>
                                <td>{`${item}.${local}`}</td>
                                <td><button>editar</button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Table