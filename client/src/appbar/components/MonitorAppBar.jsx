import { MobileAppBar } from './MobileAppBar';
import { Outlet, useNavigate } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { MenuItem } from '@mui/material';

import { colors } from '../../style/colors';

export function MonitorAppBar({
    HideOnScroll,
    props,
    handleDrawerToggle,
    pages,
    container,
    mobileOpen,
}) {
    const navigate = useNavigate();

    return <><CssBaseline />
        <HideOnScroll {...props}>
            <AppBar 
            sx={{
                height: 45,
                bgcolor: colors().primary
            }}>
                <Toolbar variant='dense' sx={{
                    display: "flex"
                }}>
                    <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{
                        mr: 2,
                        display: {
                            xs: 'block',
                            sm: 'none',
                            md: 'none'
                        }
                    }}>
                        <MenuIcon />
                    </IconButton>
                    {pages.map(page => <MenuItem key={page[0]} sx={{
                        display: {
                            xs: 'none',
                            sm: 'block',
                            md: 'block'
                        }
                    }}
                        onClick={() => navigate(page[1])}
                    >
                        <Typography textAlign="center" sx={{
                            fontFamily: 'Fruitella, sans-serif',
                            '&:hover': {
                                color: colors().secondary
                            }
                        }}>{page[0]}</Typography>
                    </MenuItem>)}

                </Toolbar>
                <nav>
                    <MobileAppBar pages={pages} container={container} mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
                </nav>
            </AppBar>
        </HideOnScroll>
        <Toolbar />
        <Outlet />
    </>;
}
