import { useEffect, useState } from 'react';
import { destinationFetch } from './helpers/destinationsFetch';
import { getFiltered } from './helpers/setFilters';

import { Table } from './components/Table';
import { NavBar } from './components/NavBar';

import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import flybondi from './assets/flybond-logo.svg';

import 'animate.css';
import './style.css';

function App() {
    const [newDestinations, setNewDestinations] = useState();
    const [destinations, setDestinations] = useState();
    const [pagina, setPagina] = useState(0);
    const [flyPerPage] = useState(8);
    const [filtro, setFiltro] = useState();

    const totalPages = Math.ceil(newDestinations?.length / flyPerPage);

    const nextPage = () => {
        setPagina(pagina + 1);
    };
    const prevPage = () => {
        setPagina(pagina - 1);
    };
    const handleFilter = () => {
        setNewDestinations(getFiltered(destinations, filtro));
        setPagina(0);
    };
    useEffect(() => {
        filtro?.length > 1 && handleFilter();
    }, [filtro]);

    useEffect(() => {
        setDestinations(destinationFetch(filtro));
        setNewDestinations(destinationFetch(filtro));
    }, [filtro]);

    return (
        <div className=' text-center bg-dark text-white noselect  container-fluid'>
            <h1 className=''>
                Bienvenido a <img src={flybondi} style={{ height: 40 }} />{' '}
                challenge
            </h1>
            <NavBar setFiltro={setFiltro} filtro={filtro} />
            <div className='d-flex'>
                <div className='d-flex'>
                    <button
                        hidden={newDestinations?.length < 1 ? true : false}
                        onClick={pagina < 1 ? null : prevPage}
                        disabled={pagina < 1}
                        className={`${
                            pagina < 1
                                ? 'badge pe-none arrowDisabled '
                                : 'badge bg-warning text-dark'
                        }`}
                    >
                        <FaArrowLeft size={50} />
                    </button>
                </div>
                {newDestinations?.length < 1 ? (
                    <div className='tableError d-flex animate__animated animate__fadeIn'>
                        <div>
                            <h1>No hay ningun destino a ese precio!</h1>
                            <button
                                className='btn btn-warning'
                                onClick={() => setNewDestinations(destinations)}
                            >
                                Volver
                            </button>
                        </div>
                    </div>
                ) : (
                    <Table
                        flyPerPage={flyPerPage}
                        pagina={pagina}
                        newDestinations={newDestinations}
                        setNewDestinations={setNewDestinations}
                        destinations={destinations}
                        setPagina={setPagina}
                    />
                )}
                <div className='d-flex'>
                    <button
                        hidden={newDestinations?.length < 1 ? true : false}
                        onClick={pagina >= totalPages - 1 ? null : nextPage}
                        disabled={pagina >= totalPages - 1}
                        className={`${
                            pagina >= totalPages - 1
                                ? 'badge pe-none'
                                : 'badge bg-warning text-dark'
                        }`}
                    >
                        <FaArrowRight size={50} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
