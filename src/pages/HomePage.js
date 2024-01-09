import {Link} from 'react-router-dom';

import {CiMedicalCase} from 'react-icons/ci';

const HomePage = () => {
    return ( 
        <>
            <nav className="nav border p-3">
                <Link className="nav-link active" to='/' >
                    <strong> Kucing SP </strong>
                </Link>
            </nav>

            <div className="container pt-4 pb-2 px-4">
                <h3>Dashboard</h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                    </ol>
                </nav>

                <div className="row">
                    <div className="col-12 mb-3 col-md-4">
                        <div className="card bg-primary">
                            <div className="card-body">
                                <div className="row justify-content-center align-items-center">
                                    <div className="col-3">
                                        <CiMedicalCase size={45} color='white'/>
                                    </div>
                                    <div className="col-9">
                                        <h3 className='text-white'>Diagnosa</h3>
                                        <p className='text-justify text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                        <Link to='/diagnosa' className="btn border text-white">Mulai Diagnosa</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mb-3 col-md-4">
                        <div className="card bg-warning">
                            <div className="card-body">
                                <div className="row justify-content-center align-items-center">
                                    <div className="col-3">
                                        <CiMedicalCase size={45} color='white'/>
                                    </div>
                                    <div className="col-9">
                                        <h3 className='text-white'>Diagnosa</h3>
                                        <p className='text-justify text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mb-3 col-md-4">
                        <div className="card bg-success">
                            <div className="card-body">
                                <div className="row justify-content-center align-items-center">
                                    <div className="col-3">
                                        <CiMedicalCase size={45} color='white'/>
                                    </div>
                                    <div className="col-9">
                                        <h3 className='text-white'>Diagnosa</h3>
                                        <p className='text-justify text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default HomePage;