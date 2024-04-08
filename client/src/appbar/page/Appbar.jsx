//react imports
import React from 'react';

//component imports
import { MonitorAppBar } from './../components/MonitorAppBar';
import HideOnScroll from '../components/HideOnScroll';

//MUI imports
import PropTypes from 'prop-types';



function Appbar(props) {
    const pages = [["Discover", "/"], ["News", "/news"], ["Events", "/events"]];
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };


    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <MonitorAppBar HideOnScroll={HideOnScroll} pages={pages}   props={props} handleDrawerToggle={handleDrawerToggle} 
            container={container} mobileOpen={mobileOpen}/>
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