import React from 'react';
import Sidebar from '../../components/Sidebar'
import { Outlet } from "react-router-dom";

const Root =  () => {
return (
        <React.Fragment>
        <Sidebar />
        <div> 
        <Outlet />
        </div>
        </React.Fragment>
        )

}

export default Root;

