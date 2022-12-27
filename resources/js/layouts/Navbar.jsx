import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../store/authSlice';

export default function Navbar() {
  const auth = useSelector((state) => !!state.auth.token);
  const dispatch = useDispatch();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            StreamStats
          </Typography>
          {auth && (
            <div>
              <Button
                type="button"
                onClick={() => dispatch(logout())}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}>Logout</Button>
            </div>
          )}
          {!auth && (
            <div>
              <Button
                href='/login'
                type="button"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}>Login</Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}