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
        {/* <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Time Order Placed</th>
                    <th>Type</th>
                    <th>Cost</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        test
                    </td>
                    <td>
                        test
                    </td>
                    <td>
                        test
                    </td>
                    <td>
                        test
                    </td>
                </tr>
            </tbody>
        </table> */}
        <ul>
            {adminList.map((entry) => {
                return (
                <li key={entry.id}>
                    {entry.customer_name} <></>
                    {entry.time} <></>
                    {entry.type} <></>
                    {entry.total}
                </li>
                )
            })}
        </ul>
        </>
    )
}

//set up table that order data gets rendered to
export default AdminPage