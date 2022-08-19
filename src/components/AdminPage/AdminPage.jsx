import React from 'react';
import './AdminPage.css'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';


function AdminPage() {
    const [adminList, setAdminList] = useState([])
    
    useEffect(() => {
        console.log('in useEffect');
        getAdminData()
      }, []);
    
    
      const getAdminData = () => {
        console.log('in admin');

        axios ({
            method: 'GET',
            url: '/api/order'
        })
        .then (response => {
            setAdminList(response.data)
        })
        .catch(err => {
            console.log(err);
        })
    }
        console.log(adminList);
    return (
        <>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Time Order Placed</th>
                    <th>Type</th>
                    <th>Cost</th>
                </tr>
            </thead>
            <tbody>
                {adminList.map((entry) => {
                    return(
                        <tr key={entry.id}>
                            <td>
                            {entry.customer_name}
                            </td>
                            <td>
                            {entry.time}
                            </td>
                            <td>
                            {entry.type}
                            </td>
                            <td>
                            ${entry.total}
                            </td>
                        </tr>
                    )
                })}
                
            </tbody>
        </table>
        
        </>
    )
}

//set up table that order data gets rendered to
export default AdminPage