import './App.css';
import {Route,Routes} from "react-router-dom";
import NavComponent from './NavComponent';
import SideBar from './SideBar';
import { useState } from 'react';
import TableData from './Tabel.js'

function App() {
  const [tableData,setTableData] = useState(TableData);
  return (
    <div >
    {console.log(TableData)
    }<button onClick={()=>{console.log(tableData)}}></button>
     <Routes>
        <Route path="/asd" element={<NavComponent setTableData={ setTableData}/>} />
        <Route path="/about" element={<SideBar setTableData={ tableData}/>} />
     </Routes>
    </div>
  );
}

export default App;
