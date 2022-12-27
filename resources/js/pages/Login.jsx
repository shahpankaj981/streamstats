import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';


const theme = createTheme();
const redirect_uri="https://id.twitch.tv/oauth2/authorize"+
"?response_type=code" +
"&client_id=ekez4ci808630jf0s6sffby8lninv5" +
"&redirect_uri=http://localhost:8000/callback" +
"&scope=user:read:email" +
"&state=c3ab8aa609ea11e793ae92361f002671"

export default function Login() {
    const [accessToken, setAccessToken] = React.useState(null);

    React.useEffect(() => {
    let urlHash = document.location.hash;
    if(urlHash) {
        if(urlHash.includes("access_token")) {
            let token = urlHash.slice(urlHash.indexOf("access_token")+13, urlHash.indexOf("&"));
            setAccessToken(token);
            handleCallback(token);
        } else if(urlHash.includes("error")) {
            alert("please authorize the app with Twitch!");
        }
    }
  }, [document.location.hash]);

  const handleCallback = (token) => {
    axios.post(`/api/login`, {access_token: token})
    .then(res => {

    })
    .catch(err => {

    })

  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box sx={{ mt: 1 }}>
            <Button
              href={redirect_uri}
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign in with Twitch
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
