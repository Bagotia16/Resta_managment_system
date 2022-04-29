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

function CustomerId(){
    const {customer_id} = useParams();

    useEffect(() => {
        getCustomerId();
    });

    const [customerId, setCustomerId] = useState([]);
    const [mainContent, setMainContent] = useState(<></>);

    function getCustomerId(){
        fetch("http://localhost:4000/customer/"+customer_id)
        .then(res => res.json())
        .then(data => {
            setCustomerId(data);
            setMainContent(<>
                {customerId.map(customer => (
                <TableBody>
                    <StyledTableRow key={customer.restra_name}>
                        <StyledTableCell component="th" scope="row">
                            <Link to={"/customer/"+ customer_id + "/restaurant/"+ customer.restra_name} style = {{textDecoration: "None"}}>{customer.restra_name}</Link>
                        </StyledTableCell>
                        <StyledTableCell align="right">{customer.contact}</StyledTableCell>
                        <StyledTableCell align="right">{customer.address}</StyledTableCell>
                        <StyledTableCell align="right">{customer.opening_time}:00</StyledTableCell>
                        <StyledTableCell align="right">{customer.closing_time}:00</StyledTableCell>
                    </StyledTableRow>
                </TableBody>    
                ))}
            </>);
        });
    }

    return (
        <section>
            <h1>Restaurant Data</h1>
            <br></br>
            <TableContainer component={Paper}>
                <Table aria-label="simple table" style={{width: 1200}} align = 'center'>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>restrauant name</StyledTableCell>
                            <StyledTableCell align="right">Contact</StyledTableCell>
                            <StyledTableCell align="right">Address</StyledTableCell>
                            <StyledTableCell align="right">Opening Time</StyledTableCell>
                            <StyledTableCell align="right">Closing Time</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    {mainContent}
                </Table>
            </TableContainer>
        </section>
    );
}

export default CustomerId;