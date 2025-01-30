import { AppBar, Box, Container, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from '../assets/logo.avif'

import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from "react";

const Navbar = () => {
      
      const ITEM_HEIGHT = 48;
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <Container>
            <AppBar position="static" sx={{backgroundColor: 'white', color: 'black'}} elevation={0}>
                    <Toolbar sx={{justifyContent: 'space-between', alignItems: 'center'}}>
                        <Box display={'flex'} alignItems={'center'}>
                            <img src={logo} alt="logo" height={50} width={50} />
                            <Typography color="lightblue">E-Buy</Typography>
                        </Box>
                        <List sx={{display: {xs: 'none', md: 'flex'}}}>
                            <ListItem sx={{padding: 0}}>
                                <ListItemButton>
                                    <ListItemText primary='Men'/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem sx={{padding: 0}}>
                                <ListItemButton>
                                    <ListItemText primary='Jewelery'/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem sx={{padding: 0}}>
                                <ListItemButton>
                                    <ListItemText primary='Electronics'/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem sx={{padding: 0}}>
                                <ListItemButton>
                                    <ListItemText primary='Women'/>
                                </ListItemButton>
                            </ListItem>
                        </List>
                        <List sx={{display: {xs: 'none', md: 'flex'}}}>
                            <ListItem sx={{padding: 0}}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <SearchIcon ariel-label='search' />
                                    </ListItemIcon>
                                </ListItemButton>
                            </ListItem>
                            <ListItem sx={{padding: 0}}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <PersonIcon ariel-label='user' />
                                    </ListItemIcon>
                                </ListItemButton>
                            </ListItem>
                            <ListItem sx={{padding: 0}}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <ShoppingCartIcon ariel-label='cart' />
                                    </ListItemIcon>
                                </ListItemButton>
                            </ListItem>
                        </List>
                        <Box display={{sm: 'block', md: 'none'}}>
                            <IconButton
                                aria-label="more"
                                id="long-button"
                                aria-controls={open ? 'long-menu' : undefined}
                                aria-expanded={open ? 'true' : undefined}
                                aria-haspopup="true"
                                onClick={handleClick}
                            >
                                <MoreVertIcon />
                            </IconButton>
                            <Menu
                                id="long-menu"
                                MenuListProps={{
                                'aria-labelledby': 'long-button',
                                }}
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                slotProps={{
                                paper: {
                                    style: {
                                    maxHeight: ITEM_HEIGHT * 4.5,
                                    width: '20ch',
                                    },
                                },
                                }}
                            >
                                <MenuItem onClick={handleClose}>
                                    <ListItemButton>
                                        <ListItemText primary='Men'/>
                                    </ListItemButton>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <ListItemButton>
                                        <ListItemText primary='Jewelery'/>
                                    </ListItemButton>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <ListItemButton>
                                        <ListItemText primary='Electronics'/>
                                    </ListItemButton>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <ListItemButton>
                                        <ListItemText primary='Women'/>
                                    </ListItemButton>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <SearchIcon fontSize="small" />
                                        </ListItemIcon>
                                        Search
                                    </ListItemButton>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <PersonIcon fontSize="small" />
                                        </ListItemIcon>
                                        Profile
                                    </ListItemButton>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <ShoppingCartIcon fontSize="small" />
                                        </ListItemIcon>
                                        Cart
                                    </ListItemButton>
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Toolbar>
                    <Divider />
            </AppBar>
        </Container>
    )
}

export default Navbar;
