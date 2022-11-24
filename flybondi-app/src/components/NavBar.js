import { CgArrowRightR } from 'react-icons/cg';

export const NavBar = ({ setFiltro, filtro }) => {
    return (
        <div className='d-flex justify-content-center gap-5'>
            <button
                className={`${
                    filtro === 'COR' ? 'active' : 'btn-warning'
                } btn  `}
                onClick={() => setFiltro('COR')}
            >
                <div className='d-inline-flex'>
                    <span className='me-2 fs-5 '>COR</span>
                    {<CgArrowRightR size={30} />}
                </div>
            </button>
            <button
                className={`${
                    filtro === 'BRC' ? 'active' : 'btn-warning'
                } btn  `}
                onClick={() => setFiltro('BRC')}
            >
                <div className='d-inline-flex'>
                    <span className='me-2 fs-5'>BRC</span>
                    {<CgArrowRightR size={30} />}
                </div>
            </button>
            <button
                className={`${
                    filtro === 'EPA' ? 'active' : 'btn-warning'
                } btn  `}
                onClick={() => setFiltro('EPA')}
            >
                <div className='d-inline-flex'>
                    <span className='me-2 fs-5'>EPA</span>
                    {<CgArrowRightR size={30} />}
                </div>
            </button>
            <button
                className={`${
                    filtro === 'MDZ' ? 'active' : 'btn-warning'
                } btn  `}
                onClick={() => setFiltro('MDZ')}
            >
                <div className='d-inline-flex'>
                    <span className='me-2 fs-5'>MDZ</span>
                    {<CgArrowRightR size={30} />}
                </div>
            </button>
        </div>
    );
};
