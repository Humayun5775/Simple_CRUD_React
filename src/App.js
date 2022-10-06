import './App.css';
import { Route, Routes } from "react-router-dom";
import NavComponent from './NavComponent';
import SideBar from './SideBar';
import { useState } from 'react';
import TableData from './Tabel.js'
import * as React from "react";
import { NavLink } from "react-router-dom";

function App() {
  const [tableData, setTableData] = useState(TableData);
  return (
    <div >
      <nav>
        <ul>
          <li>
            <NavLink
              to="asd"
            >
              Form
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              
            >
              Table
            </NavLink>
          </li>
          
        </ul>
      </nav>
      {console.log(TableData)
      }
      <Routes>
        <Route path="/asd" element={<NavComponent setTableData={setTableData} />} />
        <Route path="/about" element={<SideBar setTableData={tableData} />} />
      </Routes>
    </div>
  );
}

export default App;
