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
import { Button } from "@mui/material";

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
    var [itemList, setItemList] = useState([]);
    // var itemList = [];
    // new_order_id = 0;

    useEffect(() => {
        getRestaurantId();
    });

    function wrapperFunction(item_id){
        // search for item_id in item_list
        // if found, remove it
        // if not found, add it
        // console.log(item_id);
        // setButtonText("Remove");
        
        // for (var i = 0; i < item_list.length; i++) {
        //     if (item_list[i] === item_id) {
        //         item_list.splice(i, 1);
        //         setStyle("cont2");
        //         return;
        //     }
        // }
        // itemList.splice(0, 0, item_id);
        // console.log(itemList);
        setItemList(itemList => [...itemList, item_id]);
        // console.log(itemList);
        addingCartItems(itemList);
        // setStyle("cont");
        // e.target.innerText = "Add";
        // e.target.style.backgroundColor = "green";
        return;
    }

    function removeCartItem(item_id){
        setItemList(itemList.filter(item => item !== item_id));
        addingCartItems(itemList);
        return;
    }

    const [RestaurantId, setRestaurantId] = useState([]);
    const [mainContent, setMainContent] = useState(<></>);
    const [cartItem, setCartItem] = useState(<></>);

    function addingCartItems(itemList){
        // console.log(itemList);
        setCartItem(<>
            {itemList.map(items => (
                <TableBody>
                    <StyledTableRow key={items}>
                        <StyledTableCell component="th" scope="row">{items}</StyledTableCell>
                        <StyledTableCell align="right">
                            <Button variant="contained" color="secondary" onClick={removeCartItem(items)}>Remove Item</Button>
                        </StyledTableCell>
                    </StyledTableRow>
                </TableBody>
            ))}
        </>);
    }

    function getRestaurantId(){
        fetch("http://localhost:4000/customer/"+customer_id+"/restaurant/"+restaurant_id)
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
                        {/* add button to select items */}
                        <StyledTableCell align="right" >
                            <Button variant="contained" color="success" onClick={() => {wrapperFunction(Restaurant.menu_id)}}>Add Item</Button>
                        </StyledTableCell>
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
            <br></br>
            <h1>Your Cart</h1>
            <TableContainer component={Paper}>
                <Table aria-label="simple table" style={{width: 1200}} align = 'center'>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Item id</StyledTableCell>
                            <StyledTableCell align="right">Remove item</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    {cartItem}
                </Table>
            </TableContainer>
            <Button><Link to={{pathname:"/customer/"+customer_id+"/restaurant/"+restaurant_id+"/order/", state:{item_data: itemList}}}>Order</Link></Button>
        </section>
    );
}

export default RestaurantId;