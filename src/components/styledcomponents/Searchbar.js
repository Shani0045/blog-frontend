import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search'; // Import search icon

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = React.useState('');

  const handleSearch = (event) => {
    setQuery(event.target.value);
    if (onSearch) {
      onSearch(event.target.value); // Call parent-provided search function
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', borderColor:"#F48840"}}>
      <TextField
        variant="outlined"
        placeholder="Search..."
        value={query}
        onChange={handleSearch}
        size="small" // Reduces the 
        sx={{
          width: '250px',  // Width of the search bar
          '.MuiOutlinedInput-root': {
            borderRadius: '8px',  // Optional: Modify border radius
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#F48840', // Custom focus outline color
            },
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
