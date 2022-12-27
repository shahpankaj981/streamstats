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
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const theme = createTheme();
const redirect_uri="https://id.twitch.tv/oauth2/authorize"+
"?response_type=code" +
"&client_id=ekez4ci808630jf0s6sffby8lninv5" +
"&redirect_uri=http://localhost:8000/api/callback" +
"&scope=user:read:email";

export default function Login() {
  const isLoggedIn = useSelector((state) => state.auth.token);
  const navigate = useNavigate();

  React.useEffect(() => {
    if(!!isLoggedIn) {
      navigate('/');
    }
  }, []);

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
