import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ModuleTypes from '../moduleTypes/ModuleTypes';
import SopFolderInnerPage from '../sopFolderInnerPage/SopFolderInnerPage';
import Sop from '../sopFolderInnerPage/SopFolderInnerPage';
function sopFolderNavigates() {

    return (
       <Router>
           <ModuleTypes/>
           <Routes>
               <Route path="/Sop" element={<Sop/>} />
               <Route path="/SopFolderInnerPage" element={<SopFolderInnerPage/>} />
           </Routes>
       </Router>
    )
}

export default sopFolderNavigates
