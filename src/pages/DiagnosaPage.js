import {Link} from 'react-router-dom';

const DiagnosaPage = () => {

    return ( 
        <>
            <nav className="nav border p-3">
                <Link className="nav-link active" to='/' >
                    <strong> Kucing SP </strong>
                </Link>
            </nav>
            <div className="container pt-4 pb-2 px-4">
                <h3>Diagnosa</h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Diagnosa</li>
                    </ol>
                </nav>

                <div className="row">
                    {[1,2,3,4,5,6].map(i => {
                        return (
                            <div key={i} className="col-12 mb-2">
                                <div className="card p-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id={i} />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Default checkbox
                                    </label>
                                </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <Link to='/hasil-diagnosa' className="btn btn-success">Mulai Diagnosa</Link>
            </div>
        </>
     );
}
 
export default DiagnosaPage;