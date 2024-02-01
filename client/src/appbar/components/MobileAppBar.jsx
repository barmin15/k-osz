import React from "react";
import { useNavigate } from "react-router-dom";

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

export function MobileAppBar({
    pages,
    container,
    mobileOpen,
    handleDrawerToggle,
}) {
    const drawerWidth = '100vw';
    const navigate = useNavigate();

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', bgcolor: "primary.main" }}>
            <Typography variant="h6" sx={{ my: 2, color: "white", fontFamily: 'Fruitella, sans-serif' }}>
                KÁOSZ
            </Typography>
            <Divider />
            <List>
                {pages.map((page) => (
                    <ListItem key={page[0]} disablePadding onClick={(e) => navigate(page[1])}>
                        <ListItemButton sx={{ textAlign: 'center', color: "white", fontSize: 16 }}>
                            <ListItemText sx={{ fontFamily: 'Fruitella, sans-serif' }} primary={page[0]} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );


    return <Drawer anchor='top' container={container} variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} ModalProps={{
        keepMounted: true // Better open performance on mobile.

    }} sx={{
        display: {
            xs: 'block',
            sm: 'none',
            md: 'none'
        },
        '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth
        }
    }}>
        {drawer}
    </Drawer>;
}
