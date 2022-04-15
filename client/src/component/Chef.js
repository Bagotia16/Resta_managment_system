import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ReactDOM from 'react-dom';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));

const Chef = ({ handleClose }) => {
  // const navitage = useNavigate();

  const classes = useStyles();
  // create state variables for each input
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json',
                'Accept': 'application/json' },
    body: JSON.stringify({userId: userId, password: password }),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:4000/chef', requestOptions)
    .then(res => res.json())
    .then(data => {
      if(!Object.keys(data).length) {
        alert('Invalid credentials');
      }
      else{
        // redirect to customer/customer_id/
        window.location.href = `http://localhost:3000/chef/${userId}`;
      }
    })
  };

  return (
    <div style={{marginTop:150}}>
        <form className={classes.root} onSubmit={handleSubmit}>
        <TextField
            label="User-id"
            variant="filled"
            required
            value={userId}
            onChange={e => setUserId(e.target.value)}
        />
        <TextField
            label="Password"
            variant="filled"
            type="password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
        />
        <div>
            <Button variant="contained" onClick={handleClose}>
            Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary">
            Login
            </Button>
        </div>
        </form>
        </div>
  );
};

ReactDOM.render(<Chef />, document.getElementById('root'));

export default Chef;