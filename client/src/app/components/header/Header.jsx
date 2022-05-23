import React, { memo, useEffect, useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import { AppBar, Box, Toolbar, IconButton, InputBase, Link, Button } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export const Header = memo(() => {

  // const [ inputName, setInputName ] = useState('');
  // const [ data, setData ] = useState({})
  // const [ isClick, setIsClick ] = useState(false);

  // const inputUser = e => setInputName(e.target.value);

  // const testData = async (inputName) => {
  //   const res = await fetch(`/api/search?user=${inputName}`);
  //   return res.json();
  // };

  // const onClickTest = async () => {
  //   setIsClick(!isClick);
  //   const arimura = await testData(inputName);
  //   console.log(arimura);
  // }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Link href="/" underline="none" variant="h6" color='white' sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>HOME</Link>
          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={inputUser}
              name="user"
            />
          </Search>
          <Button onClick={onClickTest} variant="contained" size="medium" color="success" sx={{ ml: 1, opacity: 0.7, ":hover": 1 }}>
            Search
          </Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
});
