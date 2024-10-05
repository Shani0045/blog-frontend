import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export default function NotFoundData() {

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '65vh', // Full screen height to center vertically
        textAlign: 'center',
        backgroundColor: '#f5f5f5', // Light background color
        padding: 1,
      }}
    >
    <ErrorOutlineIcon sx={{ fontSize: 80, color: '#ff5722', marginBottom: 2 }} />
      <Typography variant="h5" component="h4" gutterBottom>
      No Post Available
      </Typography>
      <Typography variant="body1" gutterBottom>
      We couldn't find the data you are looking for. Please try again later or reload the page.
      </Typography>
    </Box>
  );
}
