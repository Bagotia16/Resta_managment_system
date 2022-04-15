import React from "react";
// import ParticlesBg from "particles-bg";
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function Home(){
    return(
        <section style={{ backgroundImage:`url(https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg)`,backgroundRepeat:"no-repeat",backgroundSize:"cover", backgroundPosition: "center", height: 870}}>
            <h1 ></h1>
            <h1> Please Select Your Role</h1>
            <div>
                {/* <Box component='div' sx = {{background : '#5f8eb2'}}> */}
                    <Box component="span" sx = {{p : 2, border: '1px', borderRadius: '5px', display: 'inline-block', margin: '5px'}}>
                        <Link to='/customer' underline="none" style = {{textDecoration: "None"}}><Button variant="contained" color="success">Customer</Button></Link>
                    </Box>
                    <Box component="span" sx = {{p : 2, border: '1px', borderRadius: '5px', display: 'inline-block', margin: '5px'}}>
                        <Link to='/chef' underline="none" style = {{textDecoration: "None"}}><Button variant="contained" color="success">Chef</Button></Link>
                    </Box>
                    <Box component="span" sx = {{p : 2, border: '1px', borderRadius: '5px', display: 'inline-block', margin: '5px'}}>
                        <Link to='/waiter' underline="none" style = {{textDecoration: "None"}}><Button variant="contained" color="success">Waiter</Button></Link>
                    </Box>
                    <Box component="span" sx = {{p : 2, border: '1px', borderRadius: '5px', display: 'inline-block', margin: '5px'}}>
                        <Link to='/cashier' underline="none" style = {{textDecoration: "None"}}><Button variant="contained" color="success">Cashier</Button></Link>
                    </Box>
                    <Box component="span" sx = {{p : 2, border: '1px', borderRadius: '5px', display: 'inline-block', margin: '5px'}}>
                        <Link to='/manager' underline="none" style = {{textDecoration: "None"}}><Button variant="contained" color="success">Manager</Button></Link>
                    {/* </Box> */}
                </Box>
            </div>
        </section>
    );
}

export default Home;