import Collpase from 'react-bootstrap/Collapse';
import {useState} from 'react';
import {Link} from 'react-router-dom';

const HasilDiagnosa = () => {
    const [openCf, setOpenCf] = useState(false);
    const [openDs, setOpenDs] = useState(false);

    const handleOpenCf = () => {
        setOpenCf(!openCf)
    }
    const handleOpenDs = () => {
        setOpenDs(!openDs);
    }
    return ( 
        <>
            <nav className="nav border p-3">
                <Link className="nav-link active" to='/' >
                    <strong> Kucing SP </strong>
                </Link>
            </nav>
            <div className="container pt-4 pb-2 px-4">
                <h3>Hasil Diagnosa</h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                        <li className="breadcrumb-item"><Link to='/diagnosa'>Diagnosa</Link></li>
                        <li className="breadcrumb-item active">Hasil Diagnosa</li>
                    </ol>
                </nav>
                <div className="row">
                    <div className="col-6">
                        <div className="d-grid">
                            <button className="btn border" onClick={handleOpenCf}  aria-controls='collapse-cf' aria-expanded={openCf} >Hasil Cf</button>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="d-grid">
                            <button className="btn border" onClick={handleOpenDs}  aria-controls='collapse-cf' aria-expanded={openDs} >Hasil Ds</button>
                        </div>
                    </div>
                    <div className="col-12">
                        <Collpase in={openCf}>
                            <div className="p-2 border mt-3 rounded" id='collapse-cf'>
                                <strong>Penyakit: nama penyakit</strong>
                                <p style={{ textAlign:'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ab saepe voluptates facilis aliquid architecto adipisci inventore molestiae! Velit nam facilis ut vitae?</p>
                                <strong>Solusi: nama solusi</strong>
                                <p style={{ textAlign:'justify' }}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, repellendus optio explicabo facere earum porro? Quod harum nulla fuga ex dolorum accusamus iusto enim blanditiis! </p>
                                <strong>Menggunakan perhitugan Certainty Factor dengan besar kemungkinnan <span className='text-warning'>100%</span></strong>
                            </div>
                        </Collpase>
                    </div>
                    <div className="col-12">
                        <Collpase in={openDs}>
                        <div className="p-2 border mt-3 rounded" id='collapse-cf'>
                                <strong>Penyakit: nama penyakit</strong>
                                <p style={{ textAlign:'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ab saepe voluptates facilis aliquid architecto adipisci inventore molestiae! Velit nam facilis ut vitae?</p>
                                <strong>Solusi: nama solusi</strong>
                                <p style={{ textAlign:'justify' }}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, repellendus optio explicabo facere earum porro? Quod harum nulla fuga ex dolorum accusamus iusto enim blanditiis! </p>
                                <strong>Menggunakan perhitugan dempster shafer dengan besar kemungkinnan <span className='text-warning'>100%</span></strong>
                            </div>
                        </Collpase>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default HasilDiagnosa;