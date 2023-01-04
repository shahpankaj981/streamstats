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
import Paper from '@mui/material/Paper';

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
const gamesColumns = [
    {
        name: "game_id",
        label: "Game ID"
   },
   {
        name: "game_name",
        label: "Game Name",
    },
    {
        name: "stream_count",
        label: "No. of Streamers",
    },
];

const topGamesColumns = [
    {
        name: "game_id",
        label: "Game ID"
   },
   {
        name: "game_name",
        label: "Game Name",
    },
    {
        name: "view_count",
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
    const [gamesWithStreamCount, setGamesWithStreamCount] = React.useState([]);
    const [topGamesWithViewerCount, setTopGamesWithViewerCount] = React.useState([]);
    const [medianNoOfViewers, setMedianNoOfViewers] = React.useState("");
    const [viewCountToTop1000, setviewCountToTop1000] = React.useState("");
    const dispatch = useDispatch();
    
    React.useEffect(() => {
        prepareApiCall('/api/stats')
        .then(res => {
            setTop100Streams(res.data.data.top_100_streams);
            setTop100StreamsUserFollows(res.data.data.top_1000_games_user_is_following);
            setGamesWithStreamCount(res.data.data.games_by_stream_count);
            setTopGamesWithViewerCount(res.data.data.top_games_by_viewer_count);
            setMedianNoOfViewers(res.data.data.median_viewers);
            setviewCountToTop1000(res.data.data.view_count_to_top_1000);
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
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4} lg={4}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 160,
                  }}
                >
                  <div>
                  <Typography gutterBottom variant="h5" component="div">
                        Median No. of Viewers for all stream
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h2>{medianNoOfViewers}</h2>
                        </Typography>
                  </div>
                </Paper>
              </Grid>
              
              <Grid item xs={12} md={8} lg={8}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 160,
                  }}
                >
                  <div>
                  <Typography gutterBottom variant="h7" component="div">
                        <b>No. of viewers the lowest viewer count stream that the logged in user is following need to gain in order to make it into the top 1000:</b>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h2>{viewCountToTop1000}</h2>
                        </Typography>
                  </div>
                </Paper>
              </Grid>
              
            </Grid>
          </Container>
          <Container>
            <Grid container spacing={1}>
            <Grid item xs={12} md={6} lg={6}>
                <MUIDataTable
                        title={"Games with their stream count"}
                        data={gamesWithStreamCount}
                        columns={gamesColumns}
                        options={options}
                    />
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <MUIDataTable
                        title={"Top Games with their viewer count"}
                        data={topGamesWithViewerCount}
                        columns={topGamesColumns}
                        options={options}
                    />
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <MUIDataTable
                        title={"Top 100 Streams"}
                        data={top100Streams}
                        columns={columns}
                        options={options}
                    />
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <MUIDataTable
                        title={"Top 100 Streams User Follows"}
                        data={top100StreamsUserFollows}
                        columns={columns}
                        options={options}
                    />
              </Grid>
              
            </Grid>
          </Container>
        </div>
    );
}
