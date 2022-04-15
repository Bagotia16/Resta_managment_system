import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useParams } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 16,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function RestaurantId(){
    const {customer_id, restaurant_id} = useParams();
    // console.log(customer_id, restaurant_id);

    useEffect(() => {
        getRestaurantId();
    });

    const [RestaurantId, setRestaurantId] = useState([]);
    const [mainContent, setMainContent] = useState(<></>);

    function getRestaurantId(){
        fetch("http://localhost:4000/customer/"+customer_id+"/"+restaurant_id)
        .then(res => res.json())
        .then(data => {
            setRestaurantId(data);
            setMainContent(<>
                {RestaurantId.map(Restaurant => (
                <TableBody>
                    <StyledTableRow key={Restaurant.restra_name}>
                        <StyledTableCell component="th" scope="row">{Restaurant.menu_id}</StyledTableCell>
                        <StyledTableCell align="right">{Restaurant.name}</StyledTableCell>
                        <StyledTableCell align="right">{Restaurant.price}</StyledTableCell>
                        <StyledTableCell align="right">{Restaurant.type}</StyledTableCell>
                        <StyledTableCell align="right">{Restaurant.category}</StyledTableCell>
                        
                    </StyledTableRow>
                </TableBody>    
                ))}
            </>);
        });
    }

    return (
        <section>
            <h1>Menu</h1>
            <br></br>
            <TableContainer component={Paper}>
                <Table aria-label="simple table" style={{width: 1200}} align = 'center'>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Item id</StyledTableCell>
                            <StyledTableCell align="right">Name</StyledTableCell>
                            <StyledTableCell align="right">Price</StyledTableCell>
                            <StyledTableCell align="right">Type</StyledTableCell>
                            <StyledTableCell align="right">Category</StyledTableCell>
                            <StyledTableCell align="right">Select item</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    {mainContent}
                </Table>
            </TableContainer>
        </section>
    );
}

export default RestaurantId;