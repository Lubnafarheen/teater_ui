import React from 'react';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import { Box, Stack } from '@mui/material';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Calendar from './components/Calendar';
import CalendarNavbar from './components/CalendarNavbar';
import StaffCalendar from './components/StaffCalendar';



const App = () => {
    return (
        <Box>
            <CalendarNavbar />
            <Stack direction="row" spacing={2} justifyContent="space-between">
                
        <StaffCalendar />
            </Stack>
            <Footer/>
        </Box>
    );
};

export default App;