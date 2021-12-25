import React from 'react';
import { Outlet } from 'react-router-dom';
import ModuleTypes from '../moduleTypes/ModuleTypes';

function SopWrapper() {
    return (
        <div>
            <ModuleTypes/>
            <Outlet/>
        </div>
    )
}

export default SopWrapper
