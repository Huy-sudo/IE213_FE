import React from 'react'
import CarTable from '../CarTable'
import AccessoryTable from '../AccessoryTable'
import {
    Routes,
    Route
} from "react-router-dom";
import LayoutAdmin from './Layout';


export default function Admin() {
    return (
        <div>
            <LayoutAdmin>
                <Routes>
                    <Route exact path="/" element={<CarTable/>}/>

                    <Route path="/car" element={<CarTable/>}/>

                    <Route path="/accessory" element={<AccessoryTable />}/>

                    <Route path="*" element={
                        <main style={{ padding: "1rem" }}>
                            <p>404 not found!</p>
                        </main>
                    }/> 
                </Routes>
            </LayoutAdmin>
        </div>
    )
}
