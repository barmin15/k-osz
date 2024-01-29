//react imports
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

//MUI imports
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { MenuItem } from '@mui/material';

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    //however in this case the appbar will respond to scroll
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};


function Appbar(props) {
    const drawerWidth = '100vw';
    const pages = [["Discover", "/"], ["News", "/news"], ["Events", "/events"], ["Tracks", "/tracks"]];
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };


    const container = window !== undefined ? () => window().document.body : undefined;

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', bgcolor:"rgb(27, 36, 48)"}}>
            <Typography variant="h6" sx={{ my: 2, color:"white" }}>
                KÁOSZ
            </Typography>
            <Divider />
            <List>
                {pages.map((item) => (
                    <ListItem key={item[0]} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center', color: "white", fontSize: 16 }}>
                            <ListItemText primary={item[0]} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar sx={{ height: 45}}>
                    <Toolbar variant={'dense'} sx={{display: "flex"}}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { xs: 'block', sm: 'none', md: 'none' }, float: "left" }}
                        >
                            <MenuIcon />
                        </IconButton>
                        {pages.map((page) => (
                            <MenuItem key={page[0]} sx={{ display: { xs: 'none', sm: 'block', md: 'block' } }}>
                                <Typography textAlign="center" sx={{ fontWeight: "bold", '&:hover':{color:'#816797'} }}>{page[0]}</Typography>
                            </MenuItem>
                        ))}

                    </Toolbar>
                    <nav>
                        <Drawer
                        anchor='top'
                            container={container}
                            variant="temporary"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                            sx={{
                                display: { xs: 'block', sm: 'none', md:'none' },
                                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </nav>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
            <Container>
                <Outlet />
            </Container>
        </>
    );
}

Appbar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Appbar;