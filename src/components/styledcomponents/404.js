import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'


export default function NotFoundPage() {
  const navigate = useNavigate();

  const goToHome = () => {
    window.location.href = "/";
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh', // Full screen height to center vertically
        textAlign: 'center',
        backgroundColor: '#f5f5f5', // Light background color
        padding: 2,
      }}
    >
      <Typography variant="h2" component="h2" gutterBottom sx={{fontSize: '6rem', color: '#F48840' }}>
        404
      </Typography>
      <Typography variant="h4" component="h2" gutterBottom>
        Oops! Page Not Found
      </Typography>
      <Typography variant="body1" gutterBottom>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={goToHome}
        sx={{ marginTop: 3 }}
      >
        Go to Homepage
      </Button>
    </Box>
  );
}
