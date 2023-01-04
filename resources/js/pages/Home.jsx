import * as React from "react"
import { redirect, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import {login, logout } from '../store/authSlice';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { prepareApiCall } from "../utility";
import Dashboard from "../components/Dashboard";

export default function Home() {
    const [user, setUser] = React.useState({});
    React.useEffect(() => {
        if(!user.username) {
            prepareApiCall('/api/user/details')
        .then(res => {
            setUser(res.data.data);
        })
        .catch(err => {

        })
        }
    }, []);

    return(
        <div>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    pt: 1,
                    pb: 1,
                }}
                >
                <Container>
                    <Typography
                        component="h2"
                        variant="h3"
                        align="center"
                        color="text.primary"
                        gutterBottom
                        >
                        {user.username}
                    </Typography>
                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                        Email: {user.email}
                    </Typography>
                    
                  <Dashboard />
                </Container>
            </Box>
        </div>
    );
}
