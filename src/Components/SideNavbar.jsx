import {useState} from 'react';
import {ProSidebar, Menu, MenuItem} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import useColors from '../Hooks/theme';
import {DataObject, Dashboard, Report, Map, CalendarMonth, Person, ClearAll} from '@mui/icons-material';

const Item = ({title, to, icon, selected, setSelected}) => {
    const colors = useColors();

    return (
        <MenuItem active={selected===title}
            style={{color: colors.redAccent[100], margin: "10px 0 10px 0"}}
            onClick={() => setSelected(title)}
            icon={icon}
            >
            <Typography>{title}</Typography>
            <Link to={to}/>
        </MenuItem>
    )
}

function SideNavbar() {
    const colors = useColors();
    const isMobile = useMediaQuery('(max-width: 800px)');
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState('dashboard');

    return (
        <Box sx={{
            '& .pro-sidebar-inner': {
                background: `${colors.primary[400] } !important`
            },
            '&.pro-icon-wrapper': {
                backgroundColor: 'transparent !important'
            },
            '&.pro-inner-item': {
                padding: '5px 35px 5px 20px !important'
            },
            '&.pro-inner-item:hover': {
                color: `${colors.primary[100]} !important`,
            },
            '&.pro-inner-item.active': {
                color: `${colors.primary[400]} !important`
            },
            height: "136vh"
            }}>
            <ProSidebar collapsed={isCollapsed || isMobile}>
            <Menu>
            <MenuItem onClick={() => setIsCollapsed(!isCollapsed)}
             icon={(isCollapsed || isMobile) ? <ClearAll /> : undefined}
             style={{margin: "10px 0 20px 0", color: colors.primary[100]}}
            >
            {(!isCollapsed && !isMobile) && (
                <Box display="flex" justifyContent="space-between" alignItems="center" ml="13px">
                    <Typography color={colors.primary[100]} variant="h3">ADMIN PANEL</Typography>
                    <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                        <ClearAll/>
                    </IconButton>
                </Box>
            )}
            </MenuItem>

            {/* ADMIN */}
            {(!isCollapsed && !isMobile) && (
                <Box mb="25px">
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <Person style={{cursor: "pointer", borderRadius:"50%", height: "89px", width: "89px"}} />
                    </Box>
                    <Box textAlign="center">
                        <Typography variant='h2' color={colors.primary[100]} fontWeight="bold" sx={{m: "10px 0 0 0"}}>IIIT Bhubaneswar</Typography>
                        <Typography variant='h5' color={colors.greenAccent[500]}>Feminix WebServices</Typography>
                    </Box>
                </Box>
            )}

            {/* SIDEBAR ITEMS */}
            <Box marginTop={(isCollapsed || isMobile) ? undefined : "25%"} paddingLeft={(isCollapsed || isMobile) ? undefined : "10%"}>
                <Item title="Dashboard" to="/" icon={<Dashboard/>} selected={selected} setSelected={setSelected}/>
                <Item title="Database" to="/database" icon={<DataObject/>} selected={selected} setSelected={setSelected}/>
                <Item title="Reports" to="/reports" icon={<Report/>} selected={selected} setSelected={setSelected}/>
                <Item title="Geolocate" to="/geography" icon={<Map/>} selected={selected} setSelected={setSelected}/>
                <Item title="Calendar" to="/calendar" icon={<CalendarMonth/>} selected={selected} setSelected={setSelected}/>
            </Box>

            </Menu>
            </ProSidebar>
        </Box>
    );
}

export default SideNavbar;