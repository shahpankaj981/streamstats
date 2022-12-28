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

export default function Dashboard() {
    React.useEffect(() => {
        prepareApiCall('/api/stats')
        .then(res => {
            console.log(res);
        })
    }, []);
    return (
        <div className="row">
            <div className="col-md-6">
                <Card sx={{ maxWidth: "100%" }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Dashboard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
}
