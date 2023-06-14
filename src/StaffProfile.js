import React from 'react';
import StaffSidebar from './components/StaffSidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import { Box, Stack } from '@mui/material';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const StaffProfile = () => {
    return (
        <Box>
            <NavBar />
            <Stack direction="row" spacing={2} justifyContent="space-between">
            <StaffSidebar />
            <Feed />
            <Rightbar />
            </Stack>
            <Footer/>
        </Box>
    );
};

export default StaffProfile;