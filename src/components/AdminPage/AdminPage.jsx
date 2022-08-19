import React from 'react';
import './AdminPage.css'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';

import { createTheme, ThemeProvider } from '@material-ui/core/styles'

import '@fontsource/roboto';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


function AdminPage() 
{
    const useStyles = makeStyles({
        table: {
          minWidth: 80,
        },
      });
    // function createData(name, calories, fat, carbs, protein) {
    //     return { name, calories, fat, carbs, protein };
    //   }
      
    
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
        
        const classes = useStyles();

    return (
        <>
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Time Order Placed</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Cost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {adminList.map((entry) => (
            <TableRow key={entry.id}>
              <TableCell component="th" scope="row">
                {entry.customer_name}
              </TableCell>
              <TableCell align="right">{entry.time}</TableCell>
              <TableCell align="right">{entry.type}</TableCell>
              <TableCell align="right">{entry.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
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
        </table> */}
        
        </>
    )
}

//set up table that order data gets rendered to
export default AdminPage