import {Routes, Route, BrowserRouter} from 'react-router-dom';

import HomePage from './pages/HomePage';
import DiagnosaPage from './pages/DiagnosaPage';
import HasilDiagnosa from './pages/HasilDiagnosa';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/diagnosa' element={<DiagnosaPage/>} />
        <Route path='/hasil-diagnosa' element={<HasilDiagnosa/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
