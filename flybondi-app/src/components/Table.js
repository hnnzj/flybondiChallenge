import React, { useState } from 'react';

export const Table = ({
    flyPerPage,
    pagina,
    newDestinations,
    setNewDestinations,
    setPagina,
}) => {
    const [input, setInput] = useState();

    const onSubmit = (e) => {
        e.preventDefault();

        setNewDestinations(
            newDestinations?.filter((el) => Math.round(el.price) < input)
        );
        setPagina(0);
    };

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    return (
        <div className='w-75 border border-5 border-warning rounded-5 noselect mt-3 mb-3'>
            <table className='fs-5 listStyle table table-dark table-hover table-striped overflow-hidden rounded-5 '>
                <thead>
                    <tr>
                        <th>Origen</th>
                        <th>Destino</th>
                        <th>Fecha</th>
                        <th>Lugares</th>
                        <th>Precio</th>
                        <th>
                            <form onSubmit={onSubmit}>
                                <div className='input-group '>
                                    <button
                                        className='btn btn-outline-warning'
                                        type='submit'
                                        id='button-addon1'
                                    >
                                        Search
                                    </button>
                                    <input
                                        value={input}
                                        onChange={handleChange}
                                        type='text'
                                        className='form-control'
                                        placeholder='Search price'
                                        aria-label='Example text with button addon'
                                        aria-describedby='button-addon1'
                                    />
                                </div>
                            </form>
                        </th>
                    </tr>
                </thead>
                <tbody className='animate__animated animate__backInLeft'>
                    {newDestinations
                        ?.slice(flyPerPage * pagina, flyPerPage * (pagina + 1))
                        .map((elm) => (
                            <tr>
                                <td className='p-4'>{elm.origin}</td>
                                <td className='p-4'>{elm.destination}</td>
                                <td className='p-4'>{elm.data}</td>
                                <td className='p-4'>{elm.availability}</td>
                                <td className='p-4'>
                                    <span className='badge bg-warning text-dark'>
                                        ${elm.price}
                                    </span>
                                </td>
                                <td className='p-4'>
                                    <button className='btn btn-outline-warning  fs-5'>
                                        Pagar
                                    </button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};
