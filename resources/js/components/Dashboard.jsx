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
import MUIDataTable from "mui-datatables";

const columns = [
    {
        name: "title",
        label: "Title"
   },
   {
        name: "game_name",
        label: "Game Name",
    },
    {
        name: "no_of_viewers",
        label: "No. of Viewers",
    },
];

const options = {
    download: false,
    filter: false,
    print: false,
    viewColumns: false,
    search: false,
    selectableRowsHideCheckboxes: false,
    selectableRowsHeader: false,
    selectableRows: 'none'
};
export default function Dashboard() {
    const [top100Streams, setTop100Streams] = React.useState([]);
    const [top100StreamsUserFollows, setTop100StreamsUserFollows] = React.useState([]);
    const dispatch = useDispatch();
    
    React.useEffect(() => {
        prepareApiCall('/api/stats')
        .then(res => {
            setTop100Streams(res.data.data.top_100_streams);
            setTop100StreamsUserFollows(res.data.data.top_1000_games_user_is_following);
            console.log(res.data.data);
        })
        .catch(err => {
            console.log(err.response.status)
            if(err.response.status == 401) {
                dispatch(logout());
            } else {
                alert("Something went wrong!!")
            }
        })
    }, []);
    return (
        <div className="row">
            <div className="col-md-6">
                <Card>
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
                <MUIDataTable
                    title={"Top 100 Streams"}
                    data={top100Streams}
                    columns={columns}
                    options={options}
                />
                <MUIDataTable
                    title={"Top 100 Streams User Follows"}
                    data={top100StreamsUserFollows}
                    columns={columns}
                    options={options}
                />
            </div>
        </div>
    );
}
